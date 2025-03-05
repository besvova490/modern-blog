<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useSlots } from 'vue';
import { cn } from '@/lib/utils';
import { AvatarRoot, AvatarImage, AvatarFallback, type AvatarImageProps } from 'reka-ui';
import { avatarVariant, type AvatarVariants } from '.';

const slots = useSlots();

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'],
  size?: AvatarVariants['size'],
  shape?: AvatarVariants['shape'],
  alt?: string,
  fullName?: string,
  hint?: string,
} & AvatarImageProps>(), {
  size: 'sm',
  shape: 'circle',
});
</script>

<template>
  <div class="flex items-center gap-2">
    <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
      <AvatarImage :src="props.src" :alt="props.alt" />
      <AvatarFallback>
        {{ fullName?.slice(0, 2) }}
      </AvatarFallback>
    </AvatarRoot>
    <div class="flex flex-col gap-1" v-if="!!slots.fullName || !!fullName">
      <slot name="fullName" />
      <span :class="cn('font-medium text-muted-foreground', { 'text-foreground text-2xl': size === 'lg' })" v-if="!slots.fullName">{{ fullName }}</span>
      <span :class="cn('text-sm font-medium text-muted-foreground', { 'text-foreground text-xl': size === 'lg' })" v-if="hint" class="text-xs text-muted-foreground">{{ hint }}</span>
    </div>
  </div>
</template>
