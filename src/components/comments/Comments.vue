<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

// components
import { PostCommentForm } from '@/components/forms/post-comment-form';
import SingleComment from './SingleComment.vue';

// composables
import { useFetchPostComments } from '@/composables/fetcher/useFetchPostComments';
import { useUserProfileStore } from '@/stores/user-profile';


const route = useRoute();

const userProfileStore = useUserProfileStore();
const { data: comments, refetch } = useFetchPostComments(route.params.slug as string);
const { isAuthenticated } = storeToRefs(userProfileStore);
</script>

<template>
  <div class="flex flex-col gap-4">
    <h5 class="text-lg font-bold">
      Comments ({{ comments?.length || 0 }})
    </h5>
    <PostCommentForm
      :slug="route.params.slug as string"
      @on-submit="refetch"
    />
    <div class="flex items-start gap-2">
    </div>
    <div class="flex flex-col gap-4">
      <SingleComment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :can-reply="!!isAuthenticated"
        :slug="route.params.slug as string"
        @on-reply="refetch"
      />
    </div>
  </div>
</template>
