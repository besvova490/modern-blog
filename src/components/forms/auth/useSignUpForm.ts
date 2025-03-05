import { z } from 'zod';

// helpers
import { useForm } from '@/composables/form/useForm';

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

export const useSignUpForm = () => {
  const form = useForm({
    initialValues: INITIAL_VALUES,
    schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return form;
};





