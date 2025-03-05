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
import { useLoginForm } from '@/components/forms/auth/useLoginForm';

const form = useLoginForm();

</script>

<template>
  <Card
    title="Log in to your account"
    description="Enter your email and password to log in to your account"
    class="max-w-[520px] mx-auto my-32 items-center text-center"
  >
    <p class="text-sm flex items-center gap-2 my-3 text-white">
      <Github/> Continue with GitHub
    </p>
    <Separator class="my-4" label="Or continue with email" />
    <form action="" @submit.prevent="form.handleSubmit" class="w-full flex flex-col gap-4 text-left">
      <Input v-model="form.fields.email[0]" label="Email" name="email" placeholder="Email" class="w-full"/>
      <Input v-model="form.fields.password[0]" label="Password" name="password" placeholder="Password" class="w-full" type="password">
        <template #label>
          <div class="flex items-center gap-2">
            Password
            <RouterLink :to="ROUTER_PATHS.AUTH.FORGOT_PASSWORD.path" class="text-xs text-muted-foreground ml-auto">
              Forgot password?
            </RouterLink>
          </div>
        </template>
      </Input>
      <Button type="submit" class="w-full mt-4">Login</Button>
    </form>
    <p class="text-center text-sm text-muted-foreground">
      Don't have an account? <RouterLink :to="ROUTER_PATHS.AUTH.SIGN_UP.path" class="text-white">Sign up</RouterLink>
    </p>
  </Card>
</template>
