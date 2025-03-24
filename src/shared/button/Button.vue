<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { RouterLink, type RouterLinkProps } from 'vue-router';

// utils
import { cn } from '@/lib/utils';
import { type ButtonVariants, buttonVariants } from '.';

export interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  to?: RouterLinkProps['to'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </RouterLink>
  <Primitive
    v-else
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
