import { fetchClient } from '@/api/fetch-client';
import { API_ENDPOINTS } from './api-endpoints.constants';
import { pathToUrl } from '@/lib/path-to-url';

export const blogPostApi = {
  post(data: Record<string, unknown>) {
    return fetchClient.post<unknown, unknown>(API_ENDPOINTS.BLOG_POSTS.ROOT, data);
  },
  patch(slug: string, data: Record<string, unknown>) {
    const url = pathToUrl(API_ENDPOINTS.BLOG_POSTS.SINGLE, { slug });

    return fetchClient.patch<unknown, unknown>(url, data);
  },
  delete(slug: string) {
    const url = pathToUrl(API_ENDPOINTS.BLOG_POSTS.SINGLE, { slug });

    return fetchClient.delete<unknown, unknown>(url);
  },
  postComment(slug: string, data: Record<string, unknown>) {
    const url = pathToUrl(API_ENDPOINTS.BLOG_POSTS.COMMENTS, { slug });

    return fetchClient.post<unknown, unknown>(url, data);
  },
};
