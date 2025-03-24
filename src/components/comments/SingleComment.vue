<script setup lang="ts">
import { ref } from 'vue';
import { ThumbsUp, ThumbsDown } from 'lucide-vue-next';

// components
import { PostCommentForm } from '@/components/forms/post-comment-form';
import { Avatar } from '@/shared/avatar';
import { Button } from '@/shared/button';

// helpers
import { dayjs } from '@/lib/dayjs';

// types
import { type IComment } from '@/types/api';

// props
interface ISingleCommentProps {
  comment: IComment;
  isReply?: boolean;
  canReply?: boolean;
  slug: string;
}

const emit = defineEmits<{
  (e: 'onReply'): void;
}>();

const props = defineProps<ISingleCommentProps>();

// state
const isReplying = ref(false);

// methods
const handleReply = () => {
  isReplying.value = false;
  emit('onReply');
};
</script>

<template>
  <div class="flex flex-col gap-4 border rounded-lg p-4">
    <Avatar :src="props.comment.author.avatar" :fullName="props.comment.author.name">
      <template #fullName>
        <div class="flex flex-col gap-1">
          {{ props.comment.author.name }}
          <span class="text-xs text-muted-foreground">
            {{ dayjs(props.comment.createdAt).format('DD MMM, YYYY') }}
          </span>
        </div>
      </template>
    </Avatar>
    <div class="flex flex-col gap-2 ml-12">
      <p>
        {{ props.comment.content }}
      </p>
      <div class="flex items-center gap-4">
        <Button variant="ghost">
          <ThumbsUp/> 12
        </Button>
        <Button variant="ghost">
          <ThumbsDown/>
        </Button>
        <Button variant="ghost" @click="isReplying = !isReplying" v-if="!props.isReply && props.canReply">
          {{ isReplying ? 'Cancel' : 'Reply' }}
        </Button>
      </div>
      <PostCommentForm
        v-if="isReplying && !props.isReply"
        :slug="props.slug"
        :parent-id="props.comment.id"
        @on-submit="handleReply"
        @on-cancel="isReplying = false"
      />

      <div class="flex flex-col gap-2 pl-4 border-l-2 mt-4" v-if="props.comment.replies && props.comment.replies.length > 0 && !props.isReply">
        <SingleComment
          v-for="reply in props.comment.replies"
          :key="reply.id"
          :comment="reply"
          class="border-none !p-0"
          isReply
          @on-reply="emit('onReply')"
          :slug="props.slug"
        />
      </div>
    </div>
  </div>
</template>
