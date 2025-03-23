<script setup lang="ts">
import { Skeleton } from '@/shared/skeleton';
</script>

<template>
  <div class="grid grid-cols-4 gap-6">
    <Skeleton class="col-span-3 w-full min-h-[500px]" />
    <Skeleton class="col-start-4 w-full min-h-[500px]" />
  </div>
</template>
