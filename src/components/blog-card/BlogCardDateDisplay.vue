<template>
  <p class="flex items-center gap-1">
    <Calendar :size="20" />
    {{ formattedDate }}
  </p>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next';
import { computed } from 'vue';
import { dayjs } from '@/lib/dayjs';

interface DateDisplayProps {
  date: string | Date;
  format?: string;
}

const props = withDefaults(defineProps<DateDisplayProps>(), {
  format: 'MMMM DD, YYYY'
});

const formattedDate = computed(() => {
  return dayjs(props.date).format(props.format);
});
</script> 
