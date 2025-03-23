<script setup lang="ts">
import { RouterLink } from 'vue-router';

// components
import { Avatar } from '@/shared/avatar';
import { Card } from '@/components/card';
import { Button } from '@/shared/button';
import { BlogCard } from '@/components/blog-card';

// helpers
import type { IPost } from '@/types/api';

interface ISinglePostSideBarProps {
  author: IPost['author'];
}

const props = defineProps<ISinglePostSideBarProps>();

const TABLE_OF_CONTENTS = [
  {
    title: 'Introduction',
    href: '#introduction',
  },
  {
    title: 'Getting Started',
    href: '#getting-started',
  },
  {
    title: 'Installation',
    href: '#installation',
  },
  {
    title: 'Usage',
    href: '#usage',
  },
  {
    title: 'Configuration',
    href: '#configuration',
  },
];

const RELATED_POSTS: IPost[] = new Array(3).fill(null).map((_, index) => ({
  slug: `related-post-${index + 1}`,
  title: `Related Post ${index + 1}`,
  content: `This is the content of related post ${index + 1}`,
  createdAt: new Date().toISOString(),
  author: props.author,
  categories: [],
  tags: [],
  thumbnail: `https://picsum.photos/100?random=${index + 1}`,
  commentsCount: 0,
  postedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

</script>

<template>
  <div class="flex flex-col gap-4">
    <Card>
      <Avatar :src="props.author.avatar" :fullName="props.author.name" class="mx-auto" size="lg" hideName/>
      <div class="flex flex-col gap-1">
        <h4 class="font-bold text-lg">{{ props.author.name }}</h4>
        <p class="text-sm text-muted-foreground mb-4">Senior Web Developer</p>
        <p class="text-sm mb-4">
          {{ props.author.bio }}
        </p>
      </div>
      <div class="flex items-center gap-2 w-full">
        <Button variant="outline" class="w-full">
          Follow
        </Button>
        <Button class="w-full">
          View Profile
        </Button>
      </div>
    </Card>
    <Card>
      <template #title>
        Table of Contents
      </template>
      <div class="flex flex-col gap-2">
        <RouterLink v-for="item in TABLE_OF_CONTENTS" :key="item.href" :to="item.href" class="text-sm text-muted-foreground hover:text-primary">
          {{ item.title }}
        </RouterLink>
      </div>
    </Card>
    <Card>
      <template #title>
        Related Posts
      </template>
      <div class="flex flex-col gap-2">
        <BlogCard v-for="post in RELATED_POSTS" :key="post.slug" :post="post" size="small"/>
      </div>
    </Card>
  </div>
</template>
