<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'reka-ui';
import { SelectRoot, useForwardPropsEmits } from 'reka-ui';

// components
import SelectTrigger from './SelectTrigger.vue';
import SelectContent from './SelectContent.vue';
import SelectItem from './SelectItem.vue';
import SelectValue from './SelectValue.vue';
import FormItem from '../form-item/FormItem.vue';

interface ISelectProps extends SelectRootProps {
  items: {
    label: string;
    value: string | number;
  }[];
  label?: string;
  error?: string;
}

const props = defineProps<ISelectProps>();
const emits = defineEmits<SelectRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <FormItem :label="label" :error="error">
    <SelectRoot v-bind="forwarded">
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="item in items" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectContent>
    </SelectRoot>
  </FormItem>
</template>
