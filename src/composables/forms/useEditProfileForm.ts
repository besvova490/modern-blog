import { z } from 'zod';

// helpers
import { useForm } from '@/composables/form/useForm';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
  bio: z.string().min(1, { message: 'Bio is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  website: z.string().url({ message: 'Invalid URL' }).optional().or(z.literal('')),
});

interface IEditProfileForm {
  name: string;
  email: string;
  bio: string;
  location: string;
  website: string;
}

const INITIAL_VALUES: IEditProfileForm = {
  name: '',
  email: '',
  bio: '',
  location: '',
  website: '',
};

export const useEditProfileForm = (defaultValues: IEditProfileForm) => {
  const form = useForm({
    initialValues: { ...INITIAL_VALUES, ...defaultValues },
    schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return form;
}; 
