"use client";

import {
  type FieldValues,
  Path,
  SubmitHandler,
  useForm as useFormHook,
  type UseFormProps,
} from "react-hook-form";
import type {ApiResult, ErrorResponse} from "@shared/api";

type SuccessDataOf<TResponse extends ApiResult> = Extract<
  TResponse,
  {success: true}
>["data"];

interface FormProps<
  TFieldValues extends FieldValues,
  TResponse extends ApiResult,
> {
  onSubmit: (values: TFieldValues) => Promise<TResponse>;
  onSuccess?: (data: SuccessDataOf<TResponse>, values: TFieldValues) => void;
  onError?: (error: ErrorResponse) => void;
  onUnexpectedError?: (error: unknown) => void;
  formOptions?: UseFormProps<TFieldValues>;
}

export const useForm = <
  TFieldValues extends FieldValues,
  TResponse extends ApiResult,
>(
  props: FormProps<TFieldValues, TResponse>,
) => {
  const {onSubmit, onSuccess, onError, onUnexpectedError, formOptions} = props;
  const form = useFormHook<TFieldValues>(formOptions);

  const submitHandler: SubmitHandler<TFieldValues> = async (data) => {
    try {
      const response = await onSubmit(data);

      if (response.success) {
        onSuccess?.(response.data as SuccessDataOf<TResponse>, data);
        return;
      }

      const {details, message} = response;

      if (details) {
        Object.entries(details).forEach(([field, messages]) => {
          form.setError(field as Path<TFieldValues>, {
            message: messages.join("\n"),
          });
        });
      } else {
        form.setError("root", {message});
      }

      onError?.(response);
    } catch (error) {
      onUnexpectedError?.(error);
    }
  };

  return {
    ...form,
    handleFormSubmit: form.handleSubmit(submitHandler),
  };
};
