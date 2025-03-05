<script setup lang="ts">
// components
import { Card } from '@/components/card';
import { Avatar } from '@/shared/avatar';

const TEAM_MEMBERS = [
  {
    name: 'John Doe',
    image: 'https://picsum.photos/200/300',
    role: 'CEO',
  },
  {
    name: 'Jane Doe',
    image: 'https://picsum.photos/200/300',
    role: 'CTO',
  },
  {
    name: 'John Doe',
    image: 'https://picsum.photos/200/300',
    role: 'CEO',
  },
];

const OUR_VALUES = [
  {
    title: 'Empowering Voices',
    description: 'We believe in the power of words to connect and inspire. That\'s why we\'ve built a platform that combines cutting-edge technology with a deep respect for the craft of writing.',
  },
  {
    title: 'Connecting Ideas',
    description: 'We believe in the power of words to connect and inspire. That\'s why we\'ve built a platform that combines cutting-edge technology with a deep respect for the craft of writing.',
  },
  {
    title: 'Inspiring Change',
    description: 'We believe in the power of words to connect and inspire. That\'s why we\'ve built a platform that combines cutting-edge technology with a deep respect for the craft of writing.',
  },
];

const CARDS = [
  {
    title: 'Our Team',
    key: 'team',
    options: TEAM_MEMBERS,
  },
  {
    title: 'Our Values',
    key: 'values',
    options: OUR_VALUES,
  },
  
];

</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-3xl font-bold">
      About Us
    </h1>
    <h5 class="text-xl text-muted-foreground">
      Empowering voices, connecting ideas, and inspiring change through the art of blogging.
    </h5>
    <div class="grid grid-cols-2 gap-12">
      <p>
        Founded in 2025, ModernBlog has quickly become the go-to platform for bloggers, thought leaders, and content creators worldwide. Our mission is to provide a powerful, intuitive, and beautiful space for ideas to flourish and communities to grow.
        <br/>
        <br/>
        We believe in the transformative power of words and the importance of diverse voices in shaping our global conversation. That's why we've built a platform that combines cutting-edge technology with a deep respect for the craft of writing.
        <br/>
        <br/>
        Get in Touch
      </p>
      <img src="https://picsum.photos/720/300" alt="ModernBlog" class="w-full h-[300px] object-cover rounded-lg">
    </div>
  </div>
  <div class="flex flex-col gap-4 mt-8" v-for="card in CARDS" :key="card.key">
    <h6 class="text-2xl font-bold">
      {{ card.title }}
    </h6>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(option, index) in card.options" :key="`${card.key}-${index}`">
        <Card>
          <div v-if="card.key === 'team'" class="flex flex-col items-center">
            <Avatar :src="(option as typeof TEAM_MEMBERS[0]).image" size="lg" class="mb-2"/>
            <p class="text-lg font-bold">
              {{ (option as typeof TEAM_MEMBERS[0]).name }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{ (option as typeof TEAM_MEMBERS[0]).role }}
            </p>
          </div>  
          <template v-else>
            <p class="text-lg font-bold">
              {{ (option as typeof OUR_VALUES[0]).title }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{ (option as typeof OUR_VALUES[0]).description }}
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>

</template>
