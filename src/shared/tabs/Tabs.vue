<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { TabsRootEmits, TabsRootProps } from 'reka-ui';
import { TabsRoot, useForwardPropsEmits, TabsList, TabsContent, TabsTrigger } from 'reka-ui';

// helpers
import { cn } from '@/lib/utils';

interface ITab {
  label: string;
  value: string;
  content?: string;
}

interface ITabsProps extends TabsRootProps {
  tabs: ITab[];
  type?: 'router' | 'static';
}

const props = defineProps<ITabsProps>();
const emits = defineEmits<TabsRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <TabsRoot v-bind="forwarded">
    <TabsList :class="cn('inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground')">
      <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">
        <RouterLink v-if="props.type === 'router'" :to="tab.value">
          {{ tab.label }}
        </RouterLink>
        <span v-else>
          {{ tab.label }}
        </span>
      </TabsTrigger>
      <template  v-if="tabs.some(tab => tab.content)">
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <slot :name="tab.value">
            {{ tab.content }}
          </slot>
        </TabsContent>
      </template>
    </TabsList>
  </TabsRoot>
</template>
