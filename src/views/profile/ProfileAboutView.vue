<script setup lang="ts">
import { MapPin, Link, Calendar } from 'lucide-vue-next';

// components
import { EditProfileForm } from '@/components/forms/edit-profile';

const OPTIONS = [
  {
    icon: MapPin,
    value: 'San Francisco, CA',
  },
  {
    icon: Link,
    value: 'https://www.google.com',
  },
  {
    icon: Calendar,
    value: 'Joined on 2021-01-01',
  },
];

const props = defineProps<{
  isEditing: boolean;
}>();

const emit = defineEmits<{
  (e: 'cancel'): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-4" v-if="!isEditing">
    <p>
      Passionate writer and tech enthusiast. I love sharing my thoughts on the latest innovations and how they shape our world.
    </p>
    <ul class="flex flex-col gap-2">
      <li v-for="option in OPTIONS" :key="option.value" class="flex items-center gap-4">
        <component :is="option.icon" class="h-4 w-4" />
        <span>{{ option.value }}</span>
      </li>
    </ul>
  </div>
  <EditProfileForm :default-values="{
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate writer and tech enthusiast. I love sharing my thoughts on the latest innovations and how they shape our world.',
    location: 'San Francisco, CA',
    website: 'https://www.google.com',
  }" v-else @cancel="emit('cancel')" />
</template>
