import { fetchClient } from '@/api/fetch-client';
import { API_ENDPOINTS } from './api-endpoints.constants';
import type { IUser } from '@/types/api';

export const usersApi = {
  getUserProfile() {
    return fetchClient.get<unknown, IUser>(API_ENDPOINTS.USERS.ME);
  },
  patchUserProfile(data: Record<string, unknown>) {
    return fetchClient.patch<unknown, IUser>(API_ENDPOINTS.USERS.ME, data);
  },
};
