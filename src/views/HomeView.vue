<script setup lang="ts">
import { computed } from 'vue';

// components
import { BlogCard } from '@/components/blog-card';
import CategoryView from './CategoryView.vue';

// composables
import { useFetchPosts } from '@/composables/fetcher/useFetchPosts';

const { data: posts, isLoading } = useFetchPosts();
const latestPost = computed(() => posts.value?.items?.[0]);
</script>

<template>
  <CategoryView>
    <template #banner>
      <div class="h-[400px]">
        <BlogCard
          size="large"
          :post="latestPost"
          :is-loading="isLoading"
        />
      </div>
    </template>
  </CategoryView>
</template>
