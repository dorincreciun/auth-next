import {
  type FieldValues,
  type SubmitHandler,
  useForm as useFormHook,
  type UseFormProps,
} from "react-hook-form"

import { OpenApiError } from "@shared/lib/openapi"
import { type ApiResponse, type ErrorResponse } from "@shared/types"

interface UseFormOptions<TFieldValues extends FieldValues, TResponse> {
  onSubmit: (data: TFieldValues) => Promise<ApiResponse<TResponse>>
  onSuccess?: (response: TResponse, data: TFieldValues) => void
  onError?: (error: ErrorResponse | unknown) => void
  formOptions?: UseFormProps<TFieldValues>
}

export const useForm = <TFieldValues extends FieldValues, TResponse>(
  props: UseFormOptions<TFieldValues, TResponse>,
) => {
  const { onSubmit, onSuccess, onError, formOptions } = props

  const form = useFormHook<TFieldValues>(formOptions)

  const submitHandler: SubmitHandler<TFieldValues> = async (data) => {
    try {
      const response = await onSubmit(data)

      if (response.success) {
        onSuccess?.(response.data, data)
      } else {
        onError?.(response)
      }
    } catch (error) {
      const apiError = error instanceof OpenApiError ? error : new OpenApiError(error)
    }
  }

  return {
    ...form,
    handleFormSubmit: form.handleSubmit(submitHandler),
  }
}
