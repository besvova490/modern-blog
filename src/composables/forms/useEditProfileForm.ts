import { z } from 'zod';

// helpers
import { useUserProfileStore } from '@/stores/user-profile';
import { useForm } from '@/composables/forms/useForm';
import { usersApi } from '@/api/users';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
  bio: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  website: z.string().url({ message: 'Invalid URL' }).optional().or(z.literal('')).nullable(),
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
  const { initStore } = useUserProfileStore();

  const form = useForm({
    initialValues: { ...INITIAL_VALUES, ...defaultValues },
    schema,
    onSubmit: (values) => {
      usersApi.patchUserProfile(values).then(() => {
        initStore();
      });
    },
  });

  return form;
}; 
