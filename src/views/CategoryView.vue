<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

// components
import { BlogList } from '@/components/blogs-list';
import { SideBar } from '@/components/side-bar';

// composables
import { useFetchPosts } from '@/composables/fetcher/useFetchPosts';
import { useFetchCategory } from '@/composables/fetcher/useFetchCategory';
// types
import type { IPost } from '@/types/api';

const route = useRoute();

let { data: category } = useFetchCategory(route.params.slug as string);
let { data, isLoading } = useFetchPosts({ category: route.params.slug });

watch(() => route.params.slug, () => {
  ({ data: category } = useFetchCategory(route.params.slug as string));
  ({ data, isLoading } = useFetchPosts({ category: route.params.slug }));
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <slot name="banner"></slot>
    <div class="grid grid-cols-[1fr_auto] gap-4">
      <BlogList
        :title="category?.name as string"
        :description="route.params.slug ? `${category?.name} is a category` : ''"
        :blogs="data?.items as IPost[]"
        :is-loading="isLoading"
        :has-more="data?.hasNextPage"
      />
      <SideBar />
    </div>
  </div>
</template>
