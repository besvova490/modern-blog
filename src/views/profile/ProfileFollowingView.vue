<script setup lang="ts">
// components
import { Avatar } from '@/shared/avatar';
import { Button } from '@/shared/button';
import { Card } from '@/components/card';

// helpers
import { type ICreator } from '@/types/api';

const FOLLOWING: ICreator[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@exam le.com',
    avatar: 'https://github.com/shadcn.png',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    username: 'john.doe',
    followersCount: 100,
    postsCount: 100,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://github.com/shadcn.png',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    username: 'jane.doe',
    followersCount: 100,
    postsCount: 100,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://github.com/shadcn.png',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    username: 'john.doe',
    followersCount: 100,
    postsCount: 100,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

];
</script>

<template>
  <Card
    title="Following"
    :description="`You are following ${FOLLOWING.length} people`"
  >
    <div class="flex flex-col gap-4">
      <div v-for="user in FOLLOWING" :key="user.id" class="flex items-center gap-4 w-full">
        <Avatar
          :src="user.avatar"
          :fullName="user.name"
          :hint="user.username"
        />
        <Button variant="outline" class="ml-auto">
          Unfollow
        </Button>
      </div>
    </div>
  </Card>
</template>
