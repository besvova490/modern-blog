import { ROUTER_PATHS } from './router-path.constants';

export const PROFILE_ROUTES = [
  {
    ...ROUTER_PATHS.PROFILE.ROOT,
    component: () => import('@/views/profile/ProfileView.vue'),
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
    ],
  },
];
