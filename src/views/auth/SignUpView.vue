<script setup lang="ts">
import { Github } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

// components
import { Card } from '@/components/card';
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';
import { Separator } from '@/shared/separator';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { useSignUpForm } from '@/components/forms/auth/useSignUpForm';

const form = useSignUpForm();

</script>

<template>
  <Card
    title="Create an account"
    description="Create an account to continue"
    class="max-w-[520px] mx-auto my-32 items-center text-center"
  >
    <p class="text-sm flex items-center gap-2 my-3 text-white">
      <Github/> Continue with GitHub
    </p>
    <Separator class="my-4" label="Or continue with email" />
    <form action="" @submit.prevent="form.handleSubmit" class="w-full flex flex-col gap-4 text-left">
      <Input v-model="form.fields.name[0]" :error="form.errors.value.name" label="Name" name="name" placeholder="Name" class="w-full"/>
      <Input v-model="form.fields.email[0]" :error="form.errors.value.email" label="Email" name="email" placeholder="Email" class="w-full"/>
      <Input v-model="form.fields.password[0]" :error="form.errors.value.password" label="Password" name="password" placeholder="Password" class="w-full" type="password"/>
      <Input v-model="form.fields.confirmPassword[0]" :error="form.errors.value.confirmPassword" label="Confirm Password" name="confirmPassword" placeholder="Confirm Password" class="w-full" type="password"/>
      <Button type="submit" class="w-full mt-4">Sign up</Button>
    </form>
    <p class="text-center text-sm text-muted-foreground">
      Already have an account? <RouterLink :to="ROUTER_PATHS.AUTH.SIGN_IN.path" class="text-white">Sign in</RouterLink>
    </p>
  </Card>
</template>
