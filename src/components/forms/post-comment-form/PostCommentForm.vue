<script setup lang="ts">
import { storeToRefs } from 'pinia';
// components
import { Button } from '@/shared/button';
import { Textarea } from '@/shared/textarea';
import { Avatar } from '@/shared/avatar';

// composables
import { usePostComment } from '@/composables/forms/usePostComment';
import { useUserProfileStore } from '@/stores/user-profile';

interface IPostCommentFormProps {
  slug: string;
  parentId?: number;
}

const props = defineProps<IPostCommentFormProps>();
const emit = defineEmits<{
  (e: 'onSubmit'): void;
  (e: 'onCancel'): void;
}>();

const userProfileStore = useUserProfileStore();
const { isAuthenticated, data: user } = storeToRefs(userProfileStore);
const form = usePostComment({
  onSubmit: () => emit('onSubmit'),
  slug: props.slug,
  parentId: props.parentId?.toString(),
});

// methods
const handleCancel = () => {
  form.resetForm();
  emit('onCancel');
};
</script>

<template>
  <div v-if="isAuthenticated && user">
    <form class="flex items-start gap-2" @submit="form.handleSubmit">
      <Avatar :src="user?.avatar" :fullName="user?.name" hide-name/>
      <div class="flex flex-col gap-2 w-full">
        <Textarea
          placeholder="Add a comment..."
          v-model="form.fields.content[0]"
          :error="form.errors.value.content"
        />
        <div class="flex items-center gap-2">
          <Button type="submit" class="w-max">
            {{ props.parentId ? 'Reply' : 'Post' }}
          </Button>
          <Button v-if="props.parentId" variant="outline" class="w-max" @click="handleCancel">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>
