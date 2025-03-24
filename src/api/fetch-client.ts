import axios from 'axios';

// helpers
import { jwtTokens } from '@/lib/jwt-tokens';
import { API_ENDPOINTS } from './api-endpoints.constants';
import { ROUTER_PATHS } from '@/router/router-path.constants';


export const fetchClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const refreshToken = async () => {
  const { refreshToken } = jwtTokens.get();

  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  try {
    const response = await fetchClient.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, { token: refreshToken }) as { accessToken: string };
    jwtTokens.set(response.accessToken);

    return response;
  } catch (error) {
    jwtTokens.clear();
    window.location.href = ROUTER_PATHS.AUTH.SIGN_IN.path;

    throw error;
  }
};

fetchClient.interceptors.request.use((config) => {
  const { accessToken } = jwtTokens.get();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

fetchClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response && error.response.status === 401 && !error.config.__isRetryRequest) {
      error.config.__isRetryRequest = true;

      const tokens = await refreshToken();

      if (tokens) {
        return fetchClient(error.config);
      }
    }

    return Promise.reject(error.response);
  },
);
