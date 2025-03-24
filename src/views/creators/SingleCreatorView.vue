<script setup lang="ts">
import { MapPin, Link, Calendar } from 'lucide-vue-next';
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
// components
import { Skeleton } from '@/shared/skeleton';
import { CreatorCard } from '@/components/creator-card';
import { Card } from '@/components/card';

// helpers
import { pathToUrl } from '@/lib/path-to-url';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { type IUser, type TResentPost } from '@/types/api';
import { useFetchSingleUser } from '@/composables/fetcher/useFetchSingleUser';
import { useFetchPosts } from '@/composables/fetcher/useFetchPosts';

const route = useRoute();
const { data: creator, isLoading: isCreatorLoading } = useFetchSingleUser(route.params.id as string);
const { data: posts, isLoading: isPostsLoading } = useFetchPosts({
  authorId: route.params.id as string,
  perPage: 3,
});

const recentPosts = computed(() => posts?.value?.items || []);

const CREATOR_FOOTER_INFO = computed(() => [
  {
    value: creator.value?.location,
    icon: MapPin,
  },
  {
    value: creator.value?.email,
    icon: Link,
  },
  {
    value: `Joined on ${creator.value?.createdAt}`,
    icon: Calendar,
  },
].filter(item => item.value));
</script>

<template>
  <Skeleton v-if="isCreatorLoading || isPostsLoading" class="w-full h-full" />
  <div v-else class="flex flex-col gap-8">
    <CreatorCard
      :creator="creator as IUser"
      variant="banner"
    >
      <template #footer>
        <ul class="flex items-center justify-start gap-8 text-sm text-muted-foreground">
          <li v-for="(info, index) in CREATOR_FOOTER_INFO" :key="index" class="flex items-center gap-2">
            <component :is="info.icon" class="w-4 h-4" />
            <span>{{ info.value }}</span>
          </li>
        </ul>
      </template>
    </CreatorCard>
    <Card>
      <ul class="flex flex-col gap-6" v-if="recentPosts.length > 0">
        <li v-for="(post, index) in recentPosts" :key="index" class="flex flex-col gap-1">
          <RouterLink :to="pathToUrl(ROUTER_PATHS.POST.SINGLE.path, { slug: post.slug })" class="text-lg font-bold w-max">{{ post.title }}</RouterLink>
          <p>{{ post.content }}</p>
          <p class="text-xs text-muted-foreground">Published on {{ post.postedAt }}</p>
        </li>
      </ul>
      <p v-else class="text-center text-muted-foreground">No posts found</p>
    </Card>
  </div>
</template>
