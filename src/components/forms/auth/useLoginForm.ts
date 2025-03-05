import { z } from 'zod';

// helpers
import { useForm } from '@/composables/form/useForm';

const schema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const INITIAL_VALUES = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const form = useForm({
    initialValues: INITIAL_VALUES,
    schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return form;
};





