<script setup lang="ts">
import { RouterView } from 'vue-router';

// components
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main class="flex-1 px-4 py-8 container mx-auto">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
