<script setup lang="ts">
// components
import { Button } from '@/shared/button';
import { Input } from '@/shared/input';
import { Card } from '@/components/card';

// helpers
import { useSubscribeForm } from '@/composables/forms/useSubscribeForm';


const form = useSubscribeForm();

</script>

<template>
  <Card>
    <template #title>
      Subscribe
    </template>
    <p class="text-sm text-muted-foreground">
      Subscribe to our newsletter to get the latest news and updates.
    </p>
    <form class="subscribe-form flex flex-col gap-4" @submit="form.handleSubmit">
      <Input type="email" placeholder="Email" v-model="form.fields.email[0]" :error="form.errors.value.email"/>
      <Button type="submit" class="w-full">Subscribe</Button>
    </form>
  </Card>
</template>
