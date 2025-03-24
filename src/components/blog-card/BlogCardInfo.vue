<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MessageCircle } from 'lucide-vue-next';
import { computed } from 'vue';

// components
import { Badge } from '@/shared/badge';
import { Avatar } from '@/shared/avatar';
import BlogCardDateDisplay from './BlogCardDateDisplay.vue';

// helpers
import { pathToUrl } from '@/lib/path-to-url';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { cn } from '@/lib/utils';
import type { IPost } from '@/types/api';

interface IBlogCardInfoProps extends Pick<IPost, 'title' | 'content' | 'author' | 'categories' | 'postedAt' | 'commentsCount' | 'slug'> {
  size: 'small' | 'medium' | 'large';
}

const props = defineProps<IBlogCardInfoProps>();

const blogUrl = computed(() => pathToUrl(ROUTER_PATHS.POST.SINGLE.path, { slug: props.slug }));
</script>

<template>
  <div :class="cn('flex flex-1 flex-col gap-2 p-4', { 'absolute bottom-0 left-0 right-0 p-10 z-[2] gap-4': props.size === 'large', 'p-0': props.size === 'small' })">
    <div class="flex items-center gap-3 mb-2" v-if="props.size !== 'small'">
      <Badge v-for="category in props.categories" :key="category.id">
        {{ category.name }}
      </Badge>
    </div>
    <RouterLink :to="blogUrl">
      <h2 :class="cn('text-lg font-semibold tracking-tight hover:underline text-white leading-5', { 'text-2xl font-bold leading-7': props.size === 'large', 'text-sm font-medium leading-5': props.size === 'small' })">
        {{ props.title }}
      </h2>
    </RouterLink>
    <p :class="cn({ 'text-sm text-gray-500': props.size === 'medium' })" v-if="props.size !== 'small'">
      {{ props.size === 'large' ? props.content : props.content.slice(0, 150) }}
    </p>
    <div class="flex items-center justify-between mt-auto">
      <template v-if="props.size === 'large'">
        <div class="flex items-center gap-2 text-sm">
          <BlogCardDateDisplay :date="props.postedAt" />
          <span>
            by {{ props.author.name }}
          </span>
        </div>
        <RouterLink :to="blogUrl">
          Read more
        </RouterLink>
      </template>
      <template v-if="props.size === 'medium'">
        <Avatar :src="props.author.avatar" :full-name="props.author.name" />
        <div class="flex items-center gap-4 text-sm text-muted-foreground">
          <BlogCardDateDisplay :date="props.postedAt"/>
          <span class="flex items-center gap-1">
            <MessageCircle :size="20"/>
            {{ props.commentsCount }}
          </span>
        </div>
      </template>
      <div v-if="props.size === 'small'" class="text-xs text-muted-foreground">
        <BlogCardDateDisplay :date="props.postedAt" />
      </div>
    </div>
  </div>
</template>
