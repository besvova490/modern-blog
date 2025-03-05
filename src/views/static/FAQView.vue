<script setup lang="ts">
// components
import { Accordion } from '@/shared/accordion';


const FAQ_OPTIONS = [
  {
    title: 'What is ModernBlog?',
    value: 'what-is-modernblog',
    content: 'ModernBlog is a platform for bloggers, thought leaders, and content creators to share their ideas and connect with others.',
  },
  {
    title: 'What is ModernBlog?',
    value: 'what-is-modernblog1',
    content: 'ModernBlog is a platform for bloggers, thought leaders, and content creators to share their ideas and connect with others.',
  },
  {
    title: 'What is ModernBlog?',
    value: 'what-is-modernblog2',
    content: 'ModernBlog is a platform for bloggers, thought leaders, and content creators to share their ideas and connect with others.',
  },
  {
    title: 'What is ModernBlog?',
    value: 'what-is-modernblog3',
    content: 'ModernBlog is a platform for bloggers, thought leaders, and content creators to share their ideas and connect with others.',
  },
  {
    title: 'What is ModernBlog?',
    value: 'what-is-modernblog4',
    content: 'ModernBlog is a platform for bloggers, thought leaders, and content creators to share their ideas and connect with others.',
  },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-3xl font-bold">
      Frequently Asked Questions
    </h1>
    <Accordion :options="FAQ_OPTIONS" />
  </div>
</template>
