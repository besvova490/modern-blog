export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    REFRESH_TOKEN: '/auth/refresh-token',
  },
  USERS: {
    ME: '/users/me',
  },
  BLOG_POSTS: {
    ROOT: '/blog-posts',
    SINGLE: '/blog-posts/:slug',
    COMMENTS: '/blog-posts/:slug/comments',
  },
  CATEGORIES: {
    ROOT: '/categories',
    SINGLE: '/categories/:slug',
  },
};
