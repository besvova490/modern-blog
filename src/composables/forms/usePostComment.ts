import { useForm } from './useForm';
import { z } from 'zod';

// helpers
import { blogPostApi } from '@/api/blog-post';


const INITIAL_DATA = {
  content: null,
  parentId: null,
};

const schema = z.object({
  content: z.string().min(1),
  parentId: z.string().optional().nullable(),
});

interface IUsePostCommentProps {
  onSubmit?: () => void;
  slug: string;
  parentId?: string;
}

export const usePostComment = ({ onSubmit, slug, parentId }: IUsePostCommentProps) => {
  const form = useForm({
    initialValues: {
      ...INITIAL_DATA,
      parentId,
    },
    schema,
    onSubmit: (data) => {
      blogPostApi.postComment(slug, data)
        .then(() => {
          onSubmit?.();
          form.resetForm();
        });
    },
  });

  return form;
};
