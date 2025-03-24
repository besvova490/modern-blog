<script setup lang="ts">
import { PencilLine } from 'lucide-vue-next';
import { Trash } from 'lucide-vue-next';

// components
import { Button } from '@/shared/button';
import { PopConfirm } from '@/shared/pop-confirm';
defineEmits<{
  (e: 'edit'): void;
  (e: 'delete'): void;
}>();
</script>

<template>
  <Button variant="ghost" size="icon" @click="$emit('edit')">
    <PencilLine class="size-4" />
  </Button>
  <PopConfirm title="Delete Post" @confirm="$emit('delete')">
    <Button variant="ghost" size="icon">
      <Trash class="size-4" />
    </Button>
  </PopConfirm>
</template>
