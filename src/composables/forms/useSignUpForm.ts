import { z } from 'zod';
import { toast } from 'vue-sonner';

// helpers
import { useForm } from '@/composables/forms/useForm';
import { authApi } from '@/api/auth';
import type { IJwtTokens } from '@/types/api';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  confirmPassword: z.string().min(1, { message: 'Confirm password is required' }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
});

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useSignUpForm = (props?: { onSubmit?: (values: IJwtTokens) => void }) => {
  const { onSubmit } = props ?? {};

  const form = useForm({
    initialValues: INITIAL_VALUES,
    schema,
    onSubmit: (values) => {
      authApi.signUp(values)
        .then((res) => {
          onSubmit?.(res);
        })
        .catch((err) => {
          if (typeof err.data.message === 'string') {
            toast.error(err.data.message, {
              description: 'Please try again',
              position: 'top-right',
              richColors: true,
            });
          }
        });
    },
  });

  return form;
};





