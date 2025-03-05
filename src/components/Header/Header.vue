<script setup lang="ts">
import { RouterLink } from 'vue-router';

// components
import { Button } from '@/shared/button';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';


const NAVIGATION_OPTIONS = [
  {
    label: 'Home',
    to: ROUTER_PATHS.ROOT.path,
  },
  {
    label: 'Creators',
    to: ROUTER_PATHS.CREATORS.ROOT.path,
  },
  {
    label: 'About',
    to: ROUTER_PATHS.STATIC_PAGES.ABOUT.path,
  },
  {
    label: 'Contact',
    to: ROUTER_PATHS.STATIC_PAGES.CONTACT.path,
  },
];

</script>

<template>
  <header class="border-b">
    <div class="flex items-center justify-start gap-4 px-4 py-3 container mx-auto">
      <RouterLink to="/" class="text-2xl font-bold">
        ModernBlog
      </RouterLink>
      <nav class="ml-4">
        <ul class="flex items-center gap-4">
          <li v-for="option in NAVIGATION_OPTIONS" :key="option.label">
            <RouterLink :to="option.to">
              {{ option.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4 ml-auto">
        <Button variant="link" :to="ROUTER_PATHS.AUTH.SIGN_IN.path">
          Login
        </Button>
        |
        <Button variant="link" :to="ROUTER_PATHS.AUTH.SIGN_UP.path">
          Sign Up
        </Button>
      </div>
    </div>
  </header>
</template>

