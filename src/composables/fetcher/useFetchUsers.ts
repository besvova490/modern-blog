import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import type { IUser } from '@/types/api';

export const useFetchUsers = (params?: Record<string, unknown>) => {
  return useFetch<IUser[]>(API_ENDPOINTS.USERS.ROOT, {
    params,
  });
};
