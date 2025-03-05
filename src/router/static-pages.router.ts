import { ROUTER_PATHS } from './router-path.constants';

export const STATIC_PAGES_ROUTES = [
  {
    ...ROUTER_PATHS.STATIC_PAGES.CONTACT,
    component: () => import('@/views/static/ContactUsView.vue'),
  },
  {
    ...ROUTER_PATHS.STATIC_PAGES.ABOUT,
    component: () => import('@/views/static/AboutUsView.vue'),
  },
  {
    ...ROUTER_PATHS.STATIC_PAGES.FAQ,
    component: () => import('@/views/static/FAQView.vue'),
  },
  {
    ...ROUTER_PATHS.STATIC_PAGES.PRIVACY_POLICY,
    component: () => import('@/views/static/PrivacyPolicy.vue'),
  },
  {
    ...ROUTER_PATHS.STATIC_PAGES.TERMS_OF_SERVICE,
    component: () => import('@/views/static/TermsOfUse.vue'),
  },
];
