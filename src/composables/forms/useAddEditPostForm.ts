import { z } from 'zod';
import { watch } from 'vue';

// helpers
import { useForm } from './useForm';
import { useFetchPost } from '../fetcher/useFetchPost';
import { blogPostApi } from '@/api/blog-post';
import { BlogPostStatus } from '@/enums/blog-post-status.enum';

const schema = z.object({
  title: z.string().min(1),
  thumbnail: z.string().min(1),
  content: z.string().min(1),
  categories: z.array(z.number()).min(1),
  status: z.nativeEnum(BlogPostStatus),
});

const INITIAL_VALUES = {
  title: '',
  thumbnail: '',
  content: '',
  categories: [],
  status: BlogPostStatus.PUBLISHED,
};

interface IUseAddEditPostFormProps {
  slug?: string;
  onSubmit?: () => void;
}

export const useAddEditPostForm = ({ slug, onSubmit }: IUseAddEditPostFormProps) => {
  const { data: post } = useFetchPost(slug);

  const form = useForm({
    schema,
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      console.log('values', values);
      const submitFn = slug ? () => blogPostApi.patch(slug, values) : () => blogPostApi.post(values);

      submitFn()
        .then(() => {
          onSubmit?.();
        })
        .catch((err) => {
          const validationErrors = err.data.message;

          Object.keys(validationErrors).forEach((key) => {
            if (typeof INITIAL_VALUES[key as keyof typeof INITIAL_VALUES] !== 'undefined') {
              form.setFieldError(key, validationErrors[key]);
            }
          });
        });
    },
  });

  watch(() => post.value?.slug, () => {
    console.log('post.value?.slug', post.value);
    form.resetForm({
      values: {
        title: post.value?.title,
        thumbnail: post.value?.thumbnail,
        content: post.value?.content,
        categories: post.value?.categories.map((category) => category.id),
        status: BlogPostStatus.PUBLISHED,
      }
    });
  });

  return form;
};
