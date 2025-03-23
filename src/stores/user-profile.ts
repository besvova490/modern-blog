import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

// helpers
import type { IUser } from '@/types/api';
import { usersApi } from '@/api/users';
import { ROUTER_PATHS } from '@/router/router-path.constants'; 
import { jwtTokens } from '@/lib/jwt-tokens';

export const useUserProfileStore = defineStore('user-profile', () => {
  const data = ref<IUser | null>(null);
  const loading = ref(false);
  const router = useRouter();
  const isAuthenticated = ref(jwtTokens.get().accessToken !== undefined);

  const initStore = async () => {
    const { accessToken } = jwtTokens.get();

    if (!accessToken) {
      return;
    }

    isAuthenticated.value = true;
    loading.value = true;
    const resp = await usersApi.getUserProfile();
    data.value = resp;
    loading.value = false;
  };

  onMounted(initStore);

  const $reset = () => {
    data.value = null;
    jwtTokens.clear();

    isAuthenticated.value = false;

    router.push(ROUTER_PATHS.AUTH.SIGN_IN.path);
  };

  return { data, loading, isAuthenticated, $reset, initStore };
});
