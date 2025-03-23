import { API_ENDPOINTS } from '@/api/api-endpoints.constants';
import { useFetch } from '../useFetch'; 
import { pathToUrl } from '@/lib/path-to-url';
import type { IComment } from '@/types/api';

export const useFetchPostComments = (slug?: string) => {
  const fetchKey = slug ? pathToUrl(API_ENDPOINTS.BLOG_POSTS.COMMENTS, { slug }) : null;
  
  return useFetch<IComment[]>(fetchKey);
};
