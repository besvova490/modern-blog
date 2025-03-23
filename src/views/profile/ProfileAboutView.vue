<script setup lang="ts">
import { computed } from 'vue';
import { MapPin, Link, Calendar } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

// components
import { EditProfileForm } from '@/components/forms/edit-profile';

// stores
import { useUserProfileStore } from '@/stores/user-profile';

// helpers
import { dayjs } from '@/lib/dayjs';

const userProfileStore = useUserProfileStore();
const { data } = storeToRefs(userProfileStore);

const OPTIONS = computed(() => [
  {
    icon: MapPin,
    value: data.value?.location as string,
  },
  {
    icon: Link,
    value: data.value?.website as string,
  },
  {
    icon: Calendar,
    value: `Joined on ${dayjs(data.value?.createdAt as string).format('DD MMM YYYY')}`,
  },
].filter(item => item.value));

defineProps<{
  isEditing: boolean;
}>();

const emit = defineEmits<{
  (e: 'cancel'): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-4" v-if="!isEditing">
    <p>
      {{ data?.bio }}
    </p>
    <ul class="flex flex-col gap-2">
      <li v-for="option in OPTIONS" :key="option.value" class="flex items-center gap-4">
        <component :is="option.icon" class="h-4 w-4" />
        <span>{{ option.value }}</span>
      </li>
    </ul>
  </div>
  <EditProfileForm :default-values="{
    name: data?.name as string,
    email: data?.email as string,
    bio: data?.bio as string,
    location: data?.location as string,
    website: data?.website as string,
  }" v-else @cancel="emit('cancel')" @submit="emit('cancel')" />
</template>
