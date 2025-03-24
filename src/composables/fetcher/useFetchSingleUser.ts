
import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import type { IUser } from '@/types/api';
import { pathToUrl } from '@/lib/path-to-url';

export const useFetchSingleUser = (id?: string) => {
  return useFetch<IUser>(id ? pathToUrl(API_ENDPOINTS.USERS.SINGLE, { id }) : null);
};
