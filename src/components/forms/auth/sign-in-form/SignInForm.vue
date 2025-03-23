<script setup lang="ts">
import { RouterLink } from 'vue-router';

// components
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { useLoginForm } from '@/composables/forms/useLoginForm';
import type { IJwtTokens } from '@/types/api';

const emit = defineEmits<{
  (e: 'submit', values: IJwtTokens): void;
}>();


const form = useLoginForm({ onSubmit: (values) => emit('submit', values) });
</script>

<template>
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
</template>
