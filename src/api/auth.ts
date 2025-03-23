import { fetchClient } from '@/api/fetch-client';
import { API_ENDPOINTS } from './api-endpoints.constants';
import { jwtTokens } from '@/lib/jwt-tokens';
import type { ISignUpRequest, ISignInRequest, IJwtTokens } from '@/types/api';

export const authApi = {
  signUp(data: ISignUpRequest) {
    return fetchClient.post<unknown, IJwtTokens>(API_ENDPOINTS.AUTH.SIGN_UP, data);
  },
  async signIn(data: ISignInRequest) {
    const resp = await fetchClient.post<unknown, IJwtTokens>(API_ENDPOINTS.AUTH.SIGN_IN, data);

    jwtTokens.set(resp.accessToken, resp.refreshToken);

    return resp;
  },
};
