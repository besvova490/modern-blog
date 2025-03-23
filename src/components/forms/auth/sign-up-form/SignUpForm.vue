<script setup lang="ts">

// components
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

// helpers
import { useSignUpForm } from '@/composables/forms/useSignUpForm';
import type { IJwtTokens } from '@/types/api';

const emit = defineEmits<{
  (e: 'submit', values: IJwtTokens): void;
}>();

const form = useSignUpForm({ onSubmit: (values) => emit('submit', values) });

</script>

<template>
  <form action="" @submit.prevent="form.handleSubmit" class="w-full flex flex-col gap-4 text-left">
    <Input v-model="form.fields.name[0]" :error="form.errors.value.name" label="Name" name="name" placeholder="Name" class="w-full"/>
    <Input v-model="form.fields.email[0]" :error="form.errors.value.email" label="Email" name="email" placeholder="Email" class="w-full"/>
    <Input v-model="form.fields.password[0]" :error="form.errors.value.password" label="Password" name="password" placeholder="Password" class="w-full" type="password"/>
    <Input v-model="form.fields.confirmPassword[0]" :error="form.errors.value.confirmPassword" label="Confirm Password" name="confirmPassword" placeholder="Confirm Password" class="w-full" type="password"/>
    <Button type="submit" class="w-full mt-4">Sign up</Button>
  </form>
</template>
