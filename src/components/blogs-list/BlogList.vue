<template>
  <div class="flex flex-col gap-4">
    <div class="mb-4">
      <h2 class="text-3xl font-bold">
        {{ props.title }}
      </h2>
      <p class="text-muted-foreground mt-2" v-if="props.description">
        {{ props.description }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-x-6 gap-y-10">
      <BlogCard
        v-for="blog in props.blogs"
        :key="blog.slug"
        :post="blog"
        size="medium"
      />
    </div>
    <Button variant="outline" class="w-fit mx-auto mt-10" size="lg">
      Load more
    </Button>
  </div>
</template>

<script setup lang="ts">
// components
import { BlogCard } from '../blog-card';
import { Button } from '@/shared/button';

// helpers
import { type IPost } from '@/types/api';

interface IBlogListProps {
  blogs: IPost[];
  title: string;
  description?: string;
}

const props = defineProps<IBlogListProps>();
</script>

