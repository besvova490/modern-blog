import { createRouter, createWebHistory } from 'vue-router';

// helpers
import { ROUTER_PATHS } from './router-path.constants';
import { STATIC_PAGES_ROUTES } from './static-pages.router';
import { AUTH_PAGES_ROUTES } from './auth.router';
import { CREATORS_ROUTES } from './creators.router';
import { PROFILE_ROUTES } from './profile.router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...ROUTER_PATHS.ROOT,
      component: () => import('@/views/HomeView.vue'),
    },
    {
      ...ROUTER_PATHS.CATEGORIES.SINGLE,
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      ...ROUTER_PATHS.POST.SINGLE,
      component: () => import('@/views/SinglePostView'),
    },
    ...STATIC_PAGES_ROUTES,
    ...AUTH_PAGES_ROUTES,
    ...CREATORS_ROUTES,
    ...PROFILE_ROUTES,
  ],
});

export default router;
