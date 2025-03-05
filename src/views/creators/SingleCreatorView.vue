<script setup lang="ts">
import { MapPin, Link, Calendar } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

// components
import { CreatorCard } from '@/components/creator-card';
import { Card } from '@/components/card';

// helpers
import { pathToUrl } from '@/lib/path-to-url';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { type ICreator, type TResentPost } from '@/types/api';


const MOCK_CREATOR: ICreator = {
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
};

const CREATOR_FOOTER_INFO = [
  {
    value: 'New York, NY',
    icon: MapPin,
  },
  {
    value: 'jane.doe@example.com',
    icon: Link,
  },
  {
    value: 'Joined on 2021-01-01',
    icon: Calendar,
  },
];

const RESENT_POSTS: TResentPost[] = [
  {
    slug: 'post-1',
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    postedAt: '2021-01-01',
  },
  {
    slug: 'post-2',
    title: 'Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    postedAt: '2021-01-01',
  },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <CreatorCard
      :creator="MOCK_CREATOR"
      variant="banner"
    >
      <template #footer>
        <ul class="flex items-center justify-start gap-8 text-sm text-muted-foreground">
          <li v-for="(info, index) in CREATOR_FOOTER_INFO" :key="index" class="flex items-center gap-2">
            <component :is="info.icon" class="w-4 h-4" />
            <span>{{ info.value }}</span>
          </li>
        </ul>
      </template>
    </CreatorCard>
    <Card>
      <ul class="flex flex-col gap-6">
        <li v-for="(post, index) in RESENT_POSTS" :key="index" class="flex flex-col gap-1">
          <RouterLink :to="pathToUrl(ROUTER_PATHS.POST.SINGLE.path, { slug: post.slug })" class="text-lg font-bold w-max">{{ post.title }}</RouterLink>
          <p>{{ post.content }}</p>
          <p class="text-xs text-muted-foreground">Published on {{ post.postedAt }}</p>
        </li>
      </ul>

    </Card>
  </div>
</template>
