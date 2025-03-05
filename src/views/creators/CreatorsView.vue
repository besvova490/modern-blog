<script setup lang="ts">
// components
import { Input } from '@/shared/input';
import { CreatorCard } from '@/components/creator-card';

// types
import type { ICreator } from '@/types/api';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { pathToUrl } from '@/lib/path-to-url';


const MOCK_CREATORS: ICreator[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'john.doe',
    email: 'john.doe@example.com',
    avatar: 'https://github.com/shadcn.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    followersCount: 100,
    postsCount: 100,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    username: 'jane.doe1',
    email: 'jane.doe@example.com',
    avatar: 'https://github.com/shadcn.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    followersCount: 100,
    postsCount: 100,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold mb-4">Discover Creators</h1>
    <Input placeholder="Search for a creator" class="w-full" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CreatorCard
        v-for="creator in MOCK_CREATORS"
        :key="creator.id"
        :creator="creator"
        :to="pathToUrl(ROUTER_PATHS.CREATORS.SINGLE.path, { userName: creator.username })"
      />
    </div>
  </div>
</template>
