import { z } from 'zod';

// helpers
import { useForm } from './useForm';


const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const INITIAL_VALUES = {
  name: '',
  email: '',
  message: '',
};

export const useContactUsForm = () => {
  const form = useForm({
    schema,
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return form;
};
