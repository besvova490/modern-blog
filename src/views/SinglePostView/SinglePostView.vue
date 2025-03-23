<script setup lang="ts">
import { computed } from 'vue';
import { Calendar, Clock, MessageCircle } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

// composables
import { useFetchPost } from '@/composables/fetcher/useFetchPost';

// components
import { SinglePostSideBar } from './components/SinglePostSideBar';
import { SinglePostActions } from './components/SinglePostActions';
import { SinglePostPreloader } from './components/SinglePostPreloader';
import { Avatar } from '@/shared/avatar';
import { Badge } from '@/shared/badge';
import { Comments } from '@/components/comments';

// helpers
import { type IPost } from '@/types/api';
import { dayjs } from '@/lib/dayjs';

const route = useRoute();

const { data, isLoading } = useFetchPost(route.params.slug as string);


const POST_META_INFO = computed(() => [
  {
    icon: Calendar,
    value: dayjs(data.value?.postedAt).format('DD MMMM YYYY')
  },
  {
    icon: Clock,
    value: '10 min read'
  },
  {
    icon: MessageCircle,
    value: '12 comments'
  }
]);

</script>

<template>
  <SinglePostPreloader v-if="isLoading || !data" />
  <div class="grid grid-cols-4 gap-6" v-else>
    <article class="flex flex-col gap-4 col-span-3">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Badge v-for="(category, index) in data.categories" :key="category.id" :variant="index === 0 ? 'default' : 'secondary'">
            {{ category.name }}
          </Badge>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold">{{ data.title }}</h1>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1 text-muted-foreground" v-for="(item, index) in POST_META_INFO" :key="index">
            <component :is="item.icon" class="w-4 h-4" />
            <span>{{ item.value }}</span>
          </div>
        </div>
        <Avatar :src="data.author.avatar" :fullName="data.author.name" />
      </div>
      <img :src="data?.thumbnail" alt="blog post image" class="w-full h-[400px] object-cover rounded-xl">
      <div class="prose max-w-none">
        <div v-html="data.content" />
      </div>
      <div class="flex flex-col gap-4">
        <SinglePostActions />
        <Comments/>
      </div>
    </article>
    <SinglePostSideBar :author="data?.author as IPost['author']" class="col-start-4"/>
  </div>
</template>
