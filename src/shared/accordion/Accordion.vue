<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
  AccordionItem,
  AccordionContent,
} from 'reka-ui';
import AccordionTrigger from './AccordionTrigger.vue';

// helpers
import { cn } from '@/lib/utils';

interface IAccordionItem {
  title: string;
  value: string;
  content: string;
}

interface IAccordionProps extends AccordionRootProps {
  options: IAccordionItem[];
}

const props = defineProps<IAccordionProps>();
const emits = defineEmits<AccordionRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <AccordionRoot v-bind="forwarded">
    <AccordionItem
      v-for="option in props.options"
      :key="option.value"
      :class="cn('border-b')"
      :value="option.value"
    >
      <AccordionTrigger>
        {{ option.title }}
      </AccordionTrigger>
      <AccordionContent
        class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div :class="cn('pb-4 pt-0')">
          {{ option.content }}
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
