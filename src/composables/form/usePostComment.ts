import { useForm } from './useForm';
import { z } from 'zod';

const INITIAL_DATA = {
  content: null,
  parentId: null,
};

const schema = z.object({
  content: z.string().min(1),
  parentId: z.number().optional(),
});

export const usePostComment = () => {
  const form = useForm({
    initialValues: INITIAL_DATA,
    schema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return form;
};
