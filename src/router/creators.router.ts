import { ROUTER_PATHS } from './router-path.constants';

export const CREATORS_ROUTES = [
  {
    ...ROUTER_PATHS.CREATORS.ROOT,
    component: () => import('@/views/creators/CreatorsView.vue'),
  },
  {
    ...ROUTER_PATHS.CREATORS.SINGLE,
    component: () => import('@/views/creators/SingleCreatorView.vue'),
  },
];
