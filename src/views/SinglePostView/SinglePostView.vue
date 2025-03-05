<script setup lang="ts">
import { Calendar, Clock, MessageCircle } from 'lucide-vue-next';

// components
import { SinglePostSideBar } from './components/SinglePostSideBar';
import { SinglePostActions } from './components/SinglePostActions';
import { Avatar } from '@/shared/avatar';
import { Badge } from '@/shared/badge';
import { Comments } from '@/components/comments';
// helpers
import { type IPost } from '@/types/api';
import { dayjs } from '@/lib/dayjs';

const POST_DATA: IPost = {
  slug: 'getting-started-with-vue-3-and-typescript',
  title: 'Getting Started with Vue 3 and TypeScript: A Comprehensive Guide',
  content: `# Getting Started with Vue 3 and TypeScript

Vue 3 has brought many exciting features to the table, and when combined with TypeScript, it becomes an even more powerful framework for building modern web applications. In this comprehensive guide, we'll explore how to set up a Vue 3 project with TypeScript and dive into some of the most important features.

## Why Vue 3 with TypeScript?

TypeScript adds static typing to JavaScript, which helps catch errors early in development and provides better IDE support. When combined with Vue 3's Composition API, it creates a robust development experience.

## Setting Up Your Project

First, let's create a new Vue 3 project with TypeScript:

\`\`\`bash
npm create vue@latest my-vue-app
\`\`\`

During the setup, make sure to select TypeScript as one of the features.

## Key Features to Explore

1. Composition API
2. TypeScript Integration
3. Improved Performance
4. Better Developer Experience

Stay tuned for more detailed examples and best practices!`,
  createdAt: '2024-03-15T10:00:00Z',
  updatedAt: '2024-03-15T10:00:00Z',
  postedAt: '2024-03-15T10:00:00Z',
  commentsCount: 12,
  thumbnail: 'https://picsum.photos/900/400',
  author: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  categories: [
    {
      id: 1,
      name: 'Vue.js',
      slug: 'vue-js',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 2,
      name: 'TypeScript',
      slug: 'typescript',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    }
  ]
};

const POST_META_INFO = [
  {
    icon: Calendar,
    value: dayjs(POST_DATA.postedAt).format('DD MMMM YYYY')
  },
  {
    icon: Clock,
    value: '10 min read'
  },
  {
    icon: MessageCircle,
    value: '12 comments'
  }
];
</script>

<template>
  <div class="grid grid-cols-4 gap-6">
    <article class="flex flex-col gap-4 col-span-3">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Badge v-for="(category, index) in POST_DATA.categories" :key="category.id" :variant="index === 0 ? 'default' : 'secondary'">
            {{ category.name }}
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold">{{ POST_DATA.title }}</h1>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1 text-muted-foreground" v-for="(item, index) in POST_META_INFO" :key="index">
            <component :is="item.icon" class="w-4 h-4" />
            <span>{{ item.value }}</span>
          </div>
        </div>
        <Avatar :src="POST_DATA.author.avatar" :full-name="POST_DATA.author.name" />
      </div>
      <img src="https://picsum.photos/900/400" alt="blog post image" class="w-full h-[400px] object-cover rounded-xl">
      <div class="prose max-w-none">
        <div v-html="POST_DATA.content" />
      </div>
      <div class="flex flex-col gap-4">
        <SinglePostActions />
        <Comments/>
      </div>
    </article>
    <SinglePostSideBar :author="POST_DATA.author" class="col-start-4"/>
  </div>
</template>
