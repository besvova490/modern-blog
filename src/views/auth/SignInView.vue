<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Github } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

// components
import { Card } from '@/components/card';
import { Separator } from '@/shared/separator';
import { SignInForm } from '@/components/forms/auth/sign-in-form';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';

const router = useRouter();

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
    <SignInForm
      @submit="router.push(ROUTER_PATHS.PROFILE.ROOT.path)"
    />
    <p class="text-center text-sm text-muted-foreground">
      Don't have an account? <RouterLink :to="ROUTER_PATHS.AUTH.SIGN_UP.path" class="text-white">Sign up</RouterLink>
    </p>
  </Card>
</template>
