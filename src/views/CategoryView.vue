<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

// components
import { BlogList } from '@/components/blogs-list';
import { SideBar } from '@/components/side-bar';

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

const route = useRoute();
watch(route, (newSlug) => {
  console.log(newSlug, 'route.params.slug');
  fetchNewPosts();
});

const fetchNewPosts = async () => {
  console.log('fetchNewPosts');
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <slot name="banner"></slot>
    <div class="grid grid-cols-[1fr_auto] gap-4">
      <BlogList
        :title="route.params.slug as string"
        :description="`${route.params.slug} is a category`"
        :blogs="[MOCK_POST, MOCK_POST, MOCK_POST, MOCK_POST, MOCK_POST]"
      />
      <SideBar />
    </div>
  </div>
</template>
