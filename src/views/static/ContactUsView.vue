<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next';

// components
import { ContactUsForm } from '@/components/forms/contact-us-form';
import { Card } from '@/components/card';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+123 456 7890',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Main St, Anytown, USA',
  },
];
</script>

<template>
  <h1 class="text-3xl font-bold mb-8">
    Contact Us
  </h1>
  <div class="flex gap-12">
    <div class="flex flex-col gap-4">
      <p class="text-lg text-muted-foreground">
        We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <Card
        description="We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible."
      >
        <template #title>
          <p class="text-2xl font-bold">
            Contact Information
          </p>
        </template>
        <ul class="flex flex-col gap-4">
          <li v-for="item in CONTACT_INFO" :key="item.label" class="flex items-center gap-2">
            <component :is="item.icon" />
            <p>{{ item.value }}</p>
          </li>
        </ul>
      </Card>
    </div>
    <ContactUsForm />
  </div>
</template>
