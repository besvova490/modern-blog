import type { RouteRecordRaw } from 'vue-router';

// helpers
import { ROUTER_PATHS } from './router-path.constants';
import { jwtTokens } from '@/lib/jwt-tokens';

export const PROFILE_ROUTES: RouteRecordRaw[] = [
  {
    ...ROUTER_PATHS.PROFILE.ROOT,
    component: () => import('@/views/profile/ProfileView.vue'),
    meta: {
      isPrivate: true,
    },
    beforeEnter: (_, __, next) => {
      const { accessToken } = jwtTokens.get();
      if (!accessToken) {
        return next({ name: 'not-found' });
      }

      return next();
    },
    children: [
      {
        path: '',
        name: 'profile-about',
        component: () => import('@/views/profile/ProfileAboutView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.ACTIVITY.ROOT,
        component: () => import('@/views/profile/ProfileActivityView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.FOLLOWING,
        component: () => import('@/views/profile/ProfileFollowingView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.ROOT,
        component: () => import('@/views/profile/posts/PostsListView/PostsListView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.CREATE,
        component: () => import('@/views/profile/posts/AddEditPostView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.SINGLE,
        component: () => import('@/views/profile/posts/AddEditPostView.vue'),
      },
      {
        ...ROUTER_PATHS.PROFILE.ACTIVITY.MY_COMMENTS,
        component: () => import('@/views/profile/MyComments.vue'),
      },
    ],
  },
];
