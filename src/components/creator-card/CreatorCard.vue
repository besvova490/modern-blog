<script setup lang="ts">
import { UserPlus } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

// components
import { Avatar } from '@/shared/avatar';
import { Button } from '@/shared/button';
import { Card } from '@/components/card';

// helpers
import { cn } from '@/lib/utils';
import type { IUser } from '@/types/api';

// props
const props = withDefaults(defineProps<{
  creator: IUser;
  variant?: 'banner' | 'compact';
  to?: string;
}>(), {
  variant: 'compact',
});

const Wrapper = computed(() => props.to ? RouterLink : 'div');
</script>

<template>
  <component :is="Wrapper" :to="to">
    <Card>
      <div class="flex items-start justify-between gap-2">
        <Avatar
          :src="creator.avatar"
          :size="props.variant === 'banner' ? 'lg' : 'sm'"
          :fullName="creator.name"
        >
          <template #fullName>
            <div class="flex flex-col gap-2 ml-4">
              <p :class="cn('text-lg leading-1 text-white', { 'text-3xl': props.variant === 'banner' })">{{ creator.name }}</p>
              <span :class="cn('text-sm text-muted-foreground', { 'text-lg': props.variant === 'banner' })">@{{ creator.name }}</span>
              <slot v-if="props.variant === 'banner'">
                <p class="text-lg text-white">
                  {{ creator.bio }}
                </p>
                <slot name="footer" v-if="props.variant === 'banner'">
                  <div class="flex items-center justify-between gap-2 text-muted-foreground text-lg">
                    <span>{{ creator.followers }} followers</span>
                    <span>{{ creator.blogPostsCount }} posts</span>
                  </div>
                </slot>
              </slot>
            </div>
          </template>
        </Avatar> 
        <Button variant="outline" @click.prevent :size="props.variant === 'banner' ? 'lg' : 'default'">
          <UserPlus />
          Follow
        </Button>
      </div>
      <p v-if="props.variant === 'compact'">
        {{ creator.bio?.length > 100 ? creator.bio.slice(0, 100) + '...' : creator.bio }}
      </p>
      <slot name="footer" v-if="props.variant === 'compact'">
        <div class="flex items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>{{ creator.followers }} followers</span>
          <span>{{ creator.blogPostsCount }} posts</span>
        </div>
      </slot>
    </Card>
  </component>
</template>
