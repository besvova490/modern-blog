export const PROFILE_PATHS = {
  ROOT: {
    path: '/profile',
    name: 'profile',
  },
  ACTIVITY: {
    ROOT: {
      path: '/profile/activity',
      name: 'profile-activity',
    },
    MY_POSTS: {
      ROOT: {
        path: '/profile/activity/posts',
        name: 'profile-activity-posts',
      },
      SINGLE: {
        path: '/profile/activity/posts/:slug',
        name: 'profile-activity-post',
      },
      CREATE: {
        path: '/profile/activity/posts/create',
        name: 'profile-activity-post-create',
      },
    },
    MY_COMMENTS: {
      path: '/profile/activity/comments',
      name: 'profile-activity-comments',
    }
  },
  FOLLOWING: {
    path: '/profile/following',
    name: 'profile-following',
  },
};

export const ROUTER_PATHS = {
  ROOT: {
    path: '/',
    name: 'home'
  },
  CATEGORIES: {
    SINGLE: {
      path: '/categories/:slug',
      name: 'single-category',
    },
  },
  CREATORS: {
    ROOT: {
      path: '/creators',
      name: 'creators',
    },
    SINGLE: {
      path: '/creators/:id',
      name: 'single-creator',
    }
  },
  POST: {
    ROOT: {
      path: '/posts',
      name: 'posts',
    },
    SINGLE: {
      path: '/posts/:slug',
      name: 'single-post',
    },
  },
  AUTH: {
    SIGN_IN: {
      path: '/auth/sign-in',
      name: 'sign-in',
    },
    SIGN_UP: {
      path: '/auth/sign-up',
      name: 'sign-up',
    },
    FORGOT_PASSWORD: {
      path: '/auth/forgot-password',
      name: 'forgot-password',
    },
  },
  STATIC_PAGES: {
    ABOUT: {
      path: '/about',
      name: 'about',
    },
    CONTACT: {
      path: '/contact',
      name: 'contact',
    },
    PRIVACY_POLICY: {
      path: '/privacy-policy',
      name: 'privacy-policy',
    },
    TERMS_OF_SERVICE: {
      path: '/terms-of-service',
      name: 'terms-of-service',
    },
    FAQ: {
      path: '/faq',
      name: 'faq',
    },
  },
  PROFILE: PROFILE_PATHS,
};
