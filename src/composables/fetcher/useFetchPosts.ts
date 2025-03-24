import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import type { IPost, IPaginated } from '@/types/api';

export const useFetchPosts = (params?: Record<string, unknown>) => {
  return useFetch<IPaginated<IPost>>(API_ENDPOINTS.BLOG_POSTS.ROOT, {
    params,
  });
};
