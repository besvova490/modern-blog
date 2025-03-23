// helpers
import { z } from 'zod';

// composables
import { useForm } from '@/composables/forms/useForm';

const validationSchema = z.object({
  email: z.string({ invalid_type_error: 'Email is required' }).email().min(1, 'Email is required'),
});

export const useSubscribeForm = () => {
  const form = useForm({
    schema: validationSchema,
    initialValues: { email: null },
    onSubmit: values => {
      console.log(values);
    }
  });

  return form;
};

