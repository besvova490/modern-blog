<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useSlots } from 'vue';

// helpers
import { cn } from '@/lib/utils';

export interface IFormItemProps {
  label?: string;
  error?: string;
}

const props = defineProps<IFormItemProps & /* @vue-ignore */ HTMLAttributes>();

const slots = useSlots();
</script>

<template>
  <div :class="cn('form-item flex flex-col gap-1', props.class)">
    <label v-if="props.label || slots.label" class="text-sm font-medium text-primary">
      <slot name="label">{{ props.label }}</slot>
    </label>
    <slot></slot>
    <p v-if="props.error" class="mt-2 text-sm text-red-600">{{ props.error }}</p>
  </div>
</template>
