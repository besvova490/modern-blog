<script setup lang="ts">
// components
import { Input } from '@/shared/input';
import { Textarea } from '@/shared/textarea';
import { Button } from '@/shared/button';
import { Card } from '@/components/card';

// helpers
import { useContactUsForm } from '@/composables/forms/useContactUsForm';

const form = useContactUsForm();
</script>

<template>
  <Card
    title="Send us a Message"
    description="We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible."
  >
    <form @submit.prevent="form.handleSubmit" class="flex flex-col gap-4">
      <Input v-model="form.fields.name[0]" :error="form.errors.value.name" label="Name" placeholder="Enter your name" name="name" />
      <Input v-model="form.fields.email[0]" :error="form.errors.value.email" label="Email" placeholder="Enter your email" name="email" />
      <Textarea v-model="form.fields.message[0]" :error="form.errors.value.message" label="Message" placeholder="Enter your message" name="message" />
      <Button type="submit" class="w-full">Send</Button>
    </form>
  </Card>
</template>
