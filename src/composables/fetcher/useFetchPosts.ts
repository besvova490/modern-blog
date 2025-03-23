import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import type { IPost, IPaginated } from '@/types/api';
import queryString from '@/lib/queryString';

export const useFetchPosts = (params?: Record<string, unknown>) => {
  const fetchKey = [
    API_ENDPOINTS.BLOG_POSTS.ROOT,
    params && queryString.stringify(params),
  ].filter(Boolean).join('?');

  return useFetch<IPaginated<IPost>>(fetchKey);
};
