<script setup lang="ts">
import type { PopoverRootEmits, PopoverRootProps } from 'reka-ui';
import { PopoverRoot, useForwardPropsEmits } from 'reka-ui';

// components
import PopoverTrigger from './PopoverTrigger.vue';
import PopoverContent from './PopoverContent.vue';

const props = defineProps<PopoverRootProps>();
const emits = defineEmits<PopoverRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <PopoverRoot v-bind="forwarded">
    <PopoverTrigger>
      <slot/>
    </PopoverTrigger>
    <PopoverContent>
      <slot name="content" />
    </PopoverContent>
  </PopoverRoot>
</template>
