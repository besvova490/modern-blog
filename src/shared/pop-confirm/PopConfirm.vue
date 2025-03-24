<script setup lang="ts">
import { ref } from 'vue';

// components
import { Popover } from '@/shared/popover';
import { Button, type Props as ButtonProps } from '@/shared/button';

withDefaults(defineProps<{
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}>(), {
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  title: 'Are you sure?',
});

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();

const open = ref(false);

// methods
const handleConfirm = () => {
  open.value = false;
  emit('confirm');
};

const handleCancel = () => {
  open.value = false;
  emit('cancel');
};

</script>

<template>
  <Popover v-model:open="open">
    <slot/>

    <template #content>
      <div class="flex flex-col gap-4">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>

        <div class="flex items-center justify-end gap-2">
          <Button v-bind="cancelButtonProps" size="sm" variant="outline" @click="handleCancel">
            {{ cancelText }}
          </Button>
          <Button v-bind="confirmButtonProps" size="sm" variant="destructive" @click="handleConfirm">
            {{ confirmText }}
          </Button>
        </div>
      </div>
    </template>
  </Popover>
</template>
