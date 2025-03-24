<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// components
import { Button } from '@/shared/button';
import { Input } from '@/shared/input';
import { Textarea } from '@/shared/textarea';
import { Select } from '@/shared/select';

// composables
import { useAddEditPostForm } from '@/composables/forms/useAddEditPostForm';
import { useFetchCategories } from '@/composables/fetcher/useFetchCategories';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { BlogPostStatus } from '@/enums/blog-post-status.enum';

const route = useRoute();
const router = useRouter();

const { fields, handleSubmit, errors, setFieldValue } = useAddEditPostForm({
  slug: route.params.slug as string,
  onSubmit: () => router.push(ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.ROOT),
});

const { data: categories } = useFetchCategories();
const categoriesOptions = computed(() => categories?.value?.map((category) => ({ label: category.name, value: +category.id })) ?? []);

// methods
const handleSaveAsDraft = () => {
  setFieldValue('status', BlogPostStatus.DRAFT);
  handleSubmit();
};
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <Input v-model="fields.title[0]" :error="errors.title" label="Title" name="title" placeholder="Title" class="w-full"/>
    <Input v-model="fields.thumbnail[0]" :error="errors.thumbnail" label="Thumbnail" name="thumbnail" placeholder="Thumbnail" class="w-full"/>
    <Textarea v-model="fields.content[0]" :error="errors.content" label="Content" name="content" placeholder="Content" class="w-full"/>
    <Select
      multiple
      :model-value="fields.categories[0].value as string[]"
      @update:model-value="setFieldValue('categories',  $event)"

      :error="errors.categories"
      label="Category"
      name="categories"
      placeholder="Category"
      class="w-full"
      :items="categoriesOptions"
    />

    <div class="flex items-center justify-end gap-2">
      <Button type="button" variant="outline" @click="handleSaveAsDraft">
        Save as draft
      </Button>
      <Button type="submit">
        Save & Publish
      </Button>
    </div>
  </form>
  <div>

  </div>
</template>
