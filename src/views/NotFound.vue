<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowLeft } from 'lucide-vue-next';
import { Home } from 'lucide-vue-next';

// components
import { Card } from '@/components/card';
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <Card class="py-8 px-10 gap-10">
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full bg-muted mx-auto">
          404
        </div>
        <div class="text-center flex flex-col gap-2">
          <h1 class="text-2xl font-bold">Page not found</h1>
          <p class="text-sm text-muted-foreground">Oops! The page you're looking for doesn't exist or has been moved..</p>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <Input placeholder="Search for something" />
        <p class="text-sm text-muted-foreground text-center">
          Try searching for what you're looking for or return to the homepage.
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        <Button variant="link" @click="router.back">
          <ArrowLeft />
          Go back
        </Button>
        <Button variant="link" to="/">
          <Home />
          Go to home
        </Button>
      </div>
    
    </Card>
  </div>
</template>

