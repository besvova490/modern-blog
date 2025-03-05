<script setup lang="ts">
// components
import { BlogCard } from '@/components/blog-card';
import CategoryView from './CategoryView.vue';

const MOCK_POST = {
  slug: 'slug',
  title: 'title',
  content: 'content',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  postedAt: '2021-01-01',
  commentsCount: 0,
  thumbnail: 'https://picsum.photos/720/420',
  author: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    avatar: 'https://via.placeholder.com/150',
  },
  categories: [
    {
      id: 1,
      slug: 'category-1',
      name: 'Category 1',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
    },
  ],
};
</script>

<template>
  <CategoryView>
    <template #banner>
      <div class="h-[400px]">
        <BlogCard
          size="large"
          :post="MOCK_POST"
        />
      </div>
    </template>
  </CategoryView>
</template>
