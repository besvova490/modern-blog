import { useFetch } from '../useFetch';
import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import type { ICategory } from '@/types/api';
import { pathToUrl } from '@/lib/path-to-url';

export const useFetchCategory = (slug?: string) => {
  return useFetch<ICategory>(slug ? pathToUrl(API_ENDPOINTS.CATEGORIES.SINGLE, { slug }) : null);
};
