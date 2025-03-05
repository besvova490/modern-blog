<template>
  <div :class="cn('blog-card w-full h-full relative overflow-hidden', { 'after:absolute after:inset-0 after:bg-black/50 rounded-xl': props.size === 'large', 'rounded-xl border': props.size === 'medium', 'flex gap-4': props.size === 'small' })">
    <img
      :src="props.post.thumbnail"
      alt="Blog Card Image"
      :class="cn('w-full h-full object-cover', { 'rounded-xl w-16 h-16': props.size === 'small', 'h-48': props.size === 'medium' })"
    />
    <BlogCardInfo
      v-bind="props.post"
      :size="props.size"
    />
  </div>
</template>

<script setup lang="ts">
// components
import BlogCardInfo from './BlogCardInfo.vue';

// helpers
import { cn } from '@/lib/utils';
import type { IPost } from '@/types/api';

interface IBlogCardProps {
  post: IPost;
  size: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<IBlogCardProps>(), { size: 'medium' });
</script>
