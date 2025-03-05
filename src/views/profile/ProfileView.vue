<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';

// components
import { Avatar } from '@/shared/avatar';
import { Button } from '@/shared/button';
import { Card } from '@/components/card';
import { Tabs } from '@/shared/tabs';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { type IUser } from '@/types/api';

const isEditing = ref(false);

const route = useRoute();

const USER: IUser = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/150',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
};

const NAVIGATION_TABS = [
  {
    label: 'About',
    value: ROUTER_PATHS.PROFILE.ROOT.path,
  },
  {
    label: 'Activity',
    value: ROUTER_PATHS.PROFILE.ACTIVITY.ROOT.path,
  },
  {
    label: 'Following',
    value: ROUTER_PATHS.PROFILE.FOLLOWING.path,
  },
];
</script>

<template>
  <Card class="mx-auto max-w-[920px]">
    <div class="flex items-center gap-4">
      <Avatar
        :src="USER.avatar"
        size="lg"
        :fullName="USER.name"
        :hint="USER.email"
      />
      <Button v-if="!isEditing" class="ml-auto" @click="isEditing = true">Edit Profile</Button>
    </div>
    <Tabs :tabs="NAVIGATION_TABS" type="router" :defaultValue="route.path" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :is-editing="isEditing" @cancel="isEditing = false" />
    </RouterView>
  </Card>
</template>
