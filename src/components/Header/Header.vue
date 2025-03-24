<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';

// components
import { Button } from '@/shared/button';
import { Avatar } from '@/shared/avatar';
// helpers
import { useUserProfileStore } from '@/stores/user-profile';
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

const userProfileStore = useUserProfileStore();
const { data, isAuthenticated } = storeToRefs(userProfileStore);
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
      <div class="flex items-center gap-4 ml-auto" v-if="!isAuthenticated">
        <Button variant="link" :to="ROUTER_PATHS.AUTH.SIGN_IN.path">
          Login
        </Button>
        |
        <Button variant="link" :to="ROUTER_PATHS.AUTH.SIGN_UP.path">
          Sign Up
        </Button>
      </div>
      <div class="flex items-center gap-4 ml-auto" v-else>
        <RouterLink :to="ROUTER_PATHS.PROFILE.ROOT.path">
          <Avatar :src="data?.avatar as string" :fullName="data?.name as string" hide-name />
        </RouterLink>
        <Button variant="link" @click="userProfileStore.$reset()">
          Logout
        </Button>
      </div>
    </div>
  </header>
</template>

