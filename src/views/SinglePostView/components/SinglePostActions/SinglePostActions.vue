<script setup lang="ts">
import { Link, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-vue-next';

// components
import { Button } from '@/shared/button';

defineProps<{
  commentsCount: number;
  likesCount: number;
}>();

const SHARE_LINKS = [
  {
    href: 'https://www.facebook.com/sharer/sharer.php?u=https://www.google.com',
    icon: Facebook,
  },
  {
    href: 'https://www.twitter.com/share?url=https://www.google.com',
    icon: Twitter,
  },
  {
    href: 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.google.com',
    icon: Linkedin,
  },
  
];
</script>

<template>
  <div class="flex items-center gap-4 w-full py-2 border-y">
    <div class="flex items-center gap-2">
      <Button variant="ghost">
        <Link :size="16" />
        Like ({{ likesCount }})
      </Button>
      <Button variant="ghost">
        <MessageCircle :size="16" />
        Comment ({{ commentsCount }})
      </Button>
    </div>

    <ul class="flex items-center gap-6 ml-auto">
      <li v-for="link in SHARE_LINKS" :key="link.href">
        <a :href="link.href" target="_blank">
          <component :is="link.icon" :size="20" />
        </a>
      </li>
    </ul>
  </div>
</template>
