<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { PenSquare, MessageSquare } from 'lucide-vue-next';

// components
import { Card } from '@/components/card';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { type IActivityLog } from '@/types/api';

const ACTIVITY_LOGS: IActivityLog[] = [
  {
    id: 1,
    message: 'You have a new message',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: 2,
    message: 'You have a new message',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: 3,
    message: 'You have a new message',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
];

const NAVIGATION_LINKS = [
  {
    label: 'My Posts',
    icon: PenSquare,
    to: ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.ROOT.path,
  },
  {
    label: 'My Comments',
    icon: MessageSquare,
    to: ROUTER_PATHS.PROFILE.ACTIVITY.MY_COMMENTS.path,
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card title="My Content">
      <div class="flex flex-col gap-2">
        <RouterLink v-for="link in NAVIGATION_LINKS" :key="link.to" :to="link.to" class="flex items-center gap-2 w-max">
          <component :is="link.icon" class="w-4 h-4" />
          <span>{{ link.label }}</span>
        </RouterLink>
      </div>
    </Card>
    <Card title="Recent Activity">
      <ul class="flex flex-col gap-2">
        <li v-for="activity in ACTIVITY_LOGS" :key="activity.id">
          <p>{{ activity.message }}</p>
        </li>
      </ul>
    </Card>
  </div>
</template>
