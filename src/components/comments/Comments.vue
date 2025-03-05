<script setup lang="ts">
// components
import { PostCommentForm } from '@/components/forms/post-comment-form';
import SingleComment from './SingleComment.vue';

// types
import { type IComment } from '@/types/api';


const COMMENTS: IComment[] = [
  {
    id: 1,
    content: 'This is a comment',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    author: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      avatar: 'https://github.com/shadcn.png',
    },
    parentId: null,
    replies: [],
  },
  {
    id: 2,
    content: 'This is a comment',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    author: {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      avatar: 'https://github.com/shadcn.png',
    },
    parentId: 1,
    replies: [
      {
        id: 3,
        content: 'This is a reply',
        createdAt: '2021-01-01',
        updatedAt: '2021-01-01',
        author: {
          id: 3,
          name: 'John Doe',
          email: 'john.doe@example.com',
          createdAt: '2021-01-01',
          updatedAt: '2021-01-01',
          avatar: 'https://github.com/shadcn.png',
        },
        parentId: 2,
        replies: [],
      },
    ],
  },
];
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
        v-for="comment in COMMENTS"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
