<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed, watch } from 'vue';

// components
import { BlogCard } from '../blog-card';
import { SubscribeForm } from '../forms/subscribe-form';
import { Badge } from '@/shared/badge';
import { Card } from '@/components/card';

// helpers
import { type IPost, type ICategory } from '@/types/api';
import { useFetchCategories } from '@/composables/fetcher/useFetchCategories';

const { data: categories } = useFetchCategories();

const POPULAR_POSTS: IPost[] = [
  {
    title: 'Post 1',
    slug: 'post-1',
    thumbnail: 'https://via.placeholder.com/150',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    postedAt: new Date().toISOString(),
    commentsCount: 10,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    categories: [],
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      id: 1,
      email: 'john.doe@example.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
  {
    title: 'Post 2',
    slug: 'post-2',
    thumbnail: 'https://picsum.photos/200/300',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    postedAt: new Date().toISOString(),
    commentsCount: 10,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    categories: [],
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      id: 1,
      email: 'john.doe@example.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
];

const SIDE_BAR_SECTIONS = computed(() => ([
  {
    type: 'categories',
    options: categories.value,
    label: 'Categories',
  },
  {
    type: 'popular-posts',
    options: POPULAR_POSTS,
    label: 'Popular Posts',
  },
  {
    type: 'subscribe',
    label: 'Subscribe',
  },
]));
</script>

<template>
  <div class="flex flex-col gap-4 w-[300px]">
    <template v-for="section in SIDE_BAR_SECTIONS" :key="section.type">
      <template v-if="section.type === 'subscribe'">
        <SubscribeForm />
      </template>
      <Card v-else>
        <template #title>
          {{ section.label }}
        </template>
        <template v-if="section.type === 'categories'">
          <div v-for="category in (section.options as ICategory[])" :key="category.id" class="flex items-center justify-between">
            <RouterLink :to="`/categories/${category.slug}`" class="text-sm text-muted-foreground">
              {{ category.name }}
            </RouterLink>
            <Badge variant="secondary">{{ category.blogPostsCount }}</Badge>
          </div>
        </template>
        <template v-if="section.type === 'popular-posts'">
          <div v-for="post in (section.options as typeof POPULAR_POSTS)" :key="post.slug">
            <BlogCard :post="post" size="small" />
          </div>
        </template>
      </Card>
    </template>
  </div>
</template>
