import { ROUTER_PATHS } from './router-path.constants';

export const AUTH_PAGES_ROUTES = [
  {
    ...ROUTER_PATHS.AUTH.SIGN_IN,
    component: () => import('@/views/auth/LogInView.vue'),
  },
  {
    ...ROUTER_PATHS.AUTH.SIGN_UP,
    component: () => import('@/views/auth/SignUpView.vue'),
  },
];
