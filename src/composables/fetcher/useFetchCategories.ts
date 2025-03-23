import { useFetch } from '../useFetch';
import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import type { ICategory } from '@/types/api';

export const useFetchCategories = () => {
  return useFetch<ICategory[]>(API_ENDPOINTS.CATEGORIES.ROOT);
};
