<script setup lang="ts">
import { Button } from '@/shared/button';
import { Input } from '@/shared/input';
import { Textarea } from '@/shared/textarea';

// helpers
import { useEditProfileForm } from '@/composables/forms/useEditProfileForm';

interface IEditProfileForm {
  name: string;
  email: string;
  bio: string;
  location: string;
  website: string;
}

const props = defineProps<{
  defaultValues: IEditProfileForm;
}>();

const emit = defineEmits<{
  (e: 'submit', data: IEditProfileForm): void;
  (e: 'cancel'): void;
}>();

const form = useEditProfileForm(props.defaultValues);

const handleSubmit = () => {
  form.handleSubmit();
  emit('submit', form.values.value);
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <Input
      v-model="form.fields.name[0]"
      :error="form.errors.value.name"
      label="Name"
      name="name"
      placeholder="Your name"
    />

    <Input
      v-model="form.fields.email[0]"
      :error="form.errors.value.email"
      label="Email"
      name="email"
      type="email"
      disabled
      placeholder="Your email"
    />

    <Textarea
      v-model="form.fields.bio[0]"
      :error="form.errors.value.bio"
      label="Bio"
      name="bio"
      placeholder="Tell us about yourself"
      class="min-h-[100px]"
    />

    <Input
      v-model="form.fields.location[0]"
      :error="form.errors.value.location"
      label="Location"
      name="location"
      type="text"
      placeholder="Your location"
    />

    <Input
      v-model="form.fields.website[0]"
      :error="form.errors.value.website"
      label="Website"
      name="website"
      type="url"
      placeholder="Your website"
    />

    <div class="flex justify-end gap-2">
      <Button
        type="button"
        variant="outline"
        @click="handleCancel"
      >
        Cancel
      </Button>
      <Button type="submit">
        Save Changes
      </Button>
    </div>
  </form>
</template> 
