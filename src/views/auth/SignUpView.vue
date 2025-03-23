<script setup lang="ts">
import { Github } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

// components
import { Card } from '@/components/card';
import { Separator } from '@/shared/separator';
import { SignUpForm } from '@/components/forms/auth/sign-up-form';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';

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
    <SignUpForm/>
    <p class="text-center text-sm text-muted-foreground">
      Already have an account? <RouterLink :to="ROUTER_PATHS.AUTH.SIGN_IN.path" class="text-white">Sign in</RouterLink>
    </p>
  </Card>
</template>
