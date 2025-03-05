<script setup lang="ts">
import { useSlots } from 'vue';

interface ICardProps {
  title?: string;
  description?: string;
}

const props = defineProps<ICardProps>();

const slots = useSlots();
</script>

<template>
  <div class="p-4 bg-card rounded-lg flex flex-col gap-4 border">
    <h5 v-if="slots.title" class="text-lg font-bold">
      <slot name="title" />
    </h5>
    <div v-if="props.title || props.description">
      <h5 v-if="props.title" class="text-lg font-bold">
        {{ props.title }}
      </h5>
      <p v-if="props.description" class="text-sm text-muted-foreground">
        {{ props.description }}
      </p>
    </div>
    <slot />
  </div>
</template>
