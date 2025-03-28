import { onMounted, ref, onUnmounted } from 'vue';

interface UseSubscribeToSSEOptions {
  url: string;
  onMessage: (event: MessageEvent) => void;
  onError?: (event: ErrorEvent) => void;
}

export const useSubscribeToSSE = (options: UseSubscribeToSSEOptions) => {
  const sse = ref<EventSource | null>(null);

  onMounted(() => {
    const sourceKey = import.meta.env.VITE_API_URL + options.url;
    const newSse = new EventSource(sourceKey);
    sse.value = newSse;

    newSse.onopen = () => {
      console.log('SSE connection opened');
    };

    newSse.onmessage = (event) => {
      options.onMessage(event);
    };

    newSse.onerror = (event) => {
      options.onError?.(event as ErrorEvent);
    };
  });

  onUnmounted(() => {
    sse.value?.close();
  });
  return { sse };
};

