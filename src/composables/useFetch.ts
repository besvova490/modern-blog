import type { AxiosRequestConfig } from 'axios';
import { ref, computed, watchEffect } from 'vue';

// helpers
import { fetchClient } from '@/api/fetch-client';

export const useFetch = <T>(url: string | null, config?: AxiosRequestConfig) => {
  const isLoading = ref(false);
  const error = ref<Error | null>(null);
  const data = ref<T | undefined>();

  isLoading.value = true;

  const fetchFunction = async () => {
    if (!url) {
      return;
    }

    await fetchClient<unknown, T>(url, config).then(resp => {
      data.value = resp;
    }).catch(err => {
      error.value = err;
    }).finally(() => {
      isLoading.value = false;
    });
  };

  watchEffect(fetchFunction);

  return {
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    data: computed(() => data.value),
    refetch: fetchFunction,
  };
};
