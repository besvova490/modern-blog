// helpers
import { useFetch } from '../useFetch';
import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { pathToUrl } from '@/lib/path-to-url';
import type { IPost } from '@/types/api';

export const useFetchPost = (slug?: string) => {
  return useFetch<IPost>(slug ? pathToUrl(API_ENDPOINTS.BLOG_POSTS.SINGLE, { slug }) : null);
};
