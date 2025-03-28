<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

// components
import { PostCommentForm } from '@/components/forms/post-comment-form';
import SingleComment from './SingleComment.vue';

// helpers
import { API_ENDPOINTS } from '@/api/api-endpoints.constants'; 
import { useSubscribeToSSE } from '@/composables/useSubscribeToSSE';
import { useFetchPostComments } from '@/composables/fetcher/useFetchPostComments';
import { useUserProfileStore } from '@/stores/user-profile';
import { pathToUrl } from '@/lib/path-to-url';

const route = useRoute();

const userProfileStore = useUserProfileStore();
const { data: comments, refetch } = useFetchPostComments(route.params.slug as string);
const { isAuthenticated } = storeToRefs(userProfileStore);

useSubscribeToSSE({
  url: pathToUrl(API_ENDPOINTS.BLOG_POSTS.SUBSCRIBE_TO_COMMENTS, { slug: route.params.slug as string }),
  onMessage: () => refetch(),
});
</script>
<template>
  <div class="flex flex-col gap-4">
    <h5 class="text-lg font-bold">
      Comments ({{ comments?.length || 0 }})
    </h5>
    <PostCommentForm :slug="route.params.slug as string"/>
    <div class="flex items-start gap-2">
    </div>
    <div class="flex flex-col gap-4">
      <SingleComment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :can-reply="!!isAuthenticated"
        :slug="route.params.slug as string"
      />
    </div>
  </div>
</template>
