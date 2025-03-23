import { z } from 'zod';
import { toast } from 'vue-sonner';

// helpers
import { useUserProfileStore } from '@/stores/user-profile';
import { useForm } from '@/composables/forms/useForm';
import { authApi } from '@/api/auth';
import type { IJwtTokens } from '@/types/api';

const schema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const INITIAL_VALUES = {
  email: '',
  password: '',
};

export const useLoginForm = (props?: { onSubmit?: (values: IJwtTokens) => void }) => {
  const { onSubmit } = props ?? {};
  const userProfileStore = useUserProfileStore();

  const form = useForm({
    initialValues: INITIAL_VALUES,
    schema,
    onSubmit: (values) => {
      authApi.signIn(values)
        .then((res) => {
          onSubmit?.(res);

          userProfileStore.initStore();
        })
        .catch((err) => {
          if (typeof err.data.message === 'string') {
            toast.error(err.data.message);
          }
        });
    },
  });

  return form;
};





