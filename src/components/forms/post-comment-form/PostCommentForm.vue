<script setup lang="ts">
// components
import { Button } from '@/shared/button';
import { Textarea } from '@/shared/textarea';
import { Avatar } from '@/shared/avatar';

// composables
import { usePostComment } from '@/composables/forms/usePostComment';

interface IPostCommentFormProps {
  isReply?: boolean;
}

const props = defineProps<IPostCommentFormProps>();

const form = usePostComment();
</script>

<template>
  <div>
    <form class="flex items-start gap-2" @submit="form.handleSubmit">
      <Avatar src="https://github.com/shadcn.png"/>
      <div class="flex flex-col gap-2 w-full">
        <Textarea
          placeholder="Add a comment..."
          v-model="form.fields.content[0]"
          :error="form.errors.value.content"
        />
        <div class="flex items-center gap-2">
          <Button type="submit" class="w-max">
            {{ props.isReply ? 'Reply' : 'Post' }}
          </Button>
          <Button v-if="props.isReply" variant="outline" class="w-max">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>
