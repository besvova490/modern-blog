import { useForm as useVeeValidateForm } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';


interface IUseFormProps<T = Record<string, unknown>> {
  schema: z.ZodSchema;
  initialValues: T;
  onSubmit?: (values: T) => void;
}

export const useForm = <T>({ schema, initialValues, onSubmit }: IUseFormProps<T>) => {
  const { handleSubmit, ...form } = useVeeValidateForm({
    initialValues,
    validationSchema: toTypedSchema(schema),
  });

  const fieldsList = Object.keys(initialValues as Record<string, unknown>);

  const fields = fieldsList.reduce((acc, field) => {
    acc[field as keyof T] = form.defineField(field);
    return acc;
  }, {} as Record<keyof T, ReturnType<typeof form.defineField>>);

  const handleSubmitFunction = handleSubmit(values => {
    onSubmit?.(values as T);
  });

  return {
    ...form,
    fields,
    handleSubmit: handleSubmitFunction,
    _handleSubmit: handleSubmit,
  };
};
