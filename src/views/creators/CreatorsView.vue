<script setup lang="ts">
// components
import { Input } from '@/shared/input';
import { CreatorCard } from '@/components/creator-card';

// helpers
import { useFetchUsers } from '@/composables/fetcher/useFetchUsers';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { pathToUrl } from '@/lib/path-to-url';

const { data } = useFetchUsers();
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold mb-4">Discover Creators</h1>
    <Input placeholder="Search for a creator" class="w-full" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CreatorCard
        v-for="creator in data"
        :key="creator.id"
        :creator="creator"
        :to="pathToUrl(ROUTER_PATHS.CREATORS.SINGLE.path, { id: creator.id.toString() })"
      />
    </div>
  </div>
</template>
