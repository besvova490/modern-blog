<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

// components
import { Avatar } from '@/shared/avatar';
import { Button } from '@/shared/button';
import { Card } from '@/components/card';
import { Tabs } from '@/shared/tabs';

// helpers
import { useUserProfileStore } from '@/stores/user-profile';
import { ROUTER_PATHS } from '@/router/router-path.constants';

const isEditing = ref(false);

const route = useRoute();
const userProfileStore = useUserProfileStore();
const { data } = storeToRefs(userProfileStore);

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
        :src="data?.avatar as string"
        size="lg"
        :fullName="data?.name as string"
        :hint="data?.email as string"
      />
      <Button v-if="!isEditing" class="ml-auto" @click="isEditing = true">Edit Profile</Button>
    </div>
    <Tabs :tabs="NAVIGATION_TABS" type="router" :defaultValue="route.path" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :is-editing="isEditing" @cancel="isEditing = false" />
    </RouterView>
  </Card>
</template>
