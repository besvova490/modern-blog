<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useAttrs, useSlots } from 'vue';
import { useVModel } from '@vueuse/core';

// components
import { FormItem, type IFormItemProps } from '../form-item';

// helpers
import { cn } from '@/lib/utils';

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number | object,
  class?: HTMLAttributes['class']
} & IFormItemProps>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>();

const attrs = useAttrs();
const slots = useSlots();
const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <FormItem :label="props.label" :error="props.error" :class="props.class === 'w-full' ? 'w-full' : ''">
    <template v-if="slots.label" #label>
      <slot name="label"></slot>
    </template>
    <template #default>
      <input v-bind="attrs"  v-model="modelValue" :class="cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)">
    </template>
  </FormItem>
</template>

