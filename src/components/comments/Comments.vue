<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
// components
import { PostCommentForm } from '@/components/forms/post-comment-form';
import SingleComment from './SingleComment.vue';

// composables
import { useFetchPostComments } from '@/composables/fetcher/useFetchPostComments';

// types
import { type IComment } from '@/types/api';

const route = useRoute();

const { data: comments } = useFetchPostComments(route.params.slug as string);
</script>

<template>
  <div class="flex flex-col gap-4">
    <h5 class="text-lg font-bold">
      Comments (123)
    </h5>
    <PostCommentForm/>
    <div class="flex items-start gap-2">
    </div>
    <div class="flex flex-col gap-4">
      <SingleComment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
