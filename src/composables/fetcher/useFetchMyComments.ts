import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import type { IComment } from '@/types/api';

export const useFetchMyComments = () => {
  
  return useFetch<IComment[]>(API_ENDPOINTS.USERS.MY_COMMENTS);
};
