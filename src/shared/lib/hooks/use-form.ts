import {
  type FieldValues,
  type Path,
  type SubmitHandler,
  useForm as useFormHook,
  type UseFormProps,
} from "react-hook-form"

import { type ApiResponse, type ErrorResponse } from "@shared/lib/openapi"

/**
 * Opțiunile hook-ului {@link useForm}.
 *
 * @template TFieldValues - Forma valorilor din formular (câmpurile controlate de react-hook-form).
 * @template TResponse - Tipul datelor utile (`data`) returnate de API la succes.
 */
interface UseFormOptions<TFieldValues extends FieldValues, TResponse> {
  /**
   * Funcția care trimite datele către API.
   * Trebuie să întoarcă un {@link ApiResponse}, discriminat prin `success`.
   */
  onSubmit: (data: TFieldValues) => Promise<ApiResponse<TResponse>>

  /**
   * Apelat când răspunsul API are `success: true`.
   *
   * @param data - Datele utile din `response.data`.
   * @param values - Valorile din formular trimise la submit.
   */
  onSuccess?: (data: TResponse, values: TFieldValues) => void

  /**
   * Apelat când serverul a răspuns, dar cu `success: false`
   * (eroare de business sau de validare).
   *
   * Erorile pe câmp (`details`) sunt deja mapate pe formular când se ajunge aici,
   * deci folosește-l doar pentru efecte suplimentare (toast, logging, redirect).
   *
   * @param error - Răspunsul de eroare, complet tipizat.
   */
  onError?: (error: ErrorResponse) => void

  /**
   * Apelat când `onSubmit` a aruncat, deci nu există răspuns de la server:
   * rețea căzută, JSON invalid, sau o excepție din propriul cod.
   *
   * @param error - Valoarea aruncată, care poate fi orice.
   */
  onUnexpectedError?: (error: unknown) => void

  /** Opțiuni pasate direct către `useForm` din react-hook-form (defaultValues, mode, resolver etc.). */
  formOptions?: UseFormProps<TFieldValues>
}

/**
 * Wrapper peste `useForm` din react-hook-form care standardizează
 * fluxul de submit + integrarea cu răspunsul API (`ApiResponse`).
 *
 * Mapează automat erorile per câmp (`details`) din răspunsul serverului
 * pe formular via `form.setError`. Când `details` lipsește, mesajul general ajunge
 * pe `errors.root`, ca să nu se piardă. Restul logicii de business e delegat
 * către {@link UseFormOptions.onSuccess}, {@link UseFormOptions.onError} și
 * {@link UseFormOptions.onUnexpectedError}.
 *
 * Cele două callback-uri de eroare sunt separate intenționat: la `onError` serverul
 * a răspuns și ai un {@link ErrorResponse} tipizat cu `message`, gata de afișat,
 * în timp ce la `onUnexpectedError` nu există răspuns și valoarea poate fi orice.
 *
 * @example
 * ```tsx
 * const { register, handleFormSubmit, formState } = useForm<LoginFormValues, LoginResponse>({
 *   onSubmit: (values) => loginUser(values),
 *   onSuccess: () => router.replace(getRoutePath(APP_ROUTES.PROFILE)),
 *   onError: (error) => toast.error(error.message),
 *   onUnexpectedError: () => toast.error("Ceva a mers prost. Încearcă din nou."),
 * })
 * ```
 *
 * @template TFieldValues - Forma valorilor din formular.
 * @template TResponse - Tipul datelor utile la succes.
 */
export const useForm = <TFieldValues extends FieldValues, TResponse>(
  props: UseFormOptions<TFieldValues, TResponse>,
) => {
  const { onSubmit, onSuccess, onError, onUnexpectedError, formOptions } = props

  const form = useFormHook<TFieldValues>(formOptions)

  const submitHandler: SubmitHandler<TFieldValues> = async (data) => {
    try {
      const response = await onSubmit(data)

      if (response.success) {
        onSuccess?.(response.data, data)
        return
      }

      const { details, message } = response

      if (details) {
        Object.entries(details).forEach(([field, messages]) => {
          form.setError(field as Path<TFieldValues>, { message: messages.join("\n") })
        })
      } else {
        form.setError("root", { message })
      }

      onError?.(response)
    } catch (error) {
      onUnexpectedError?.(error)
    }
  }

  return {
    ...form,
    /** Handler gata de pus pe `<form onSubmit={handleFormSubmit}>`. */
    handleFormSubmit: form.handleSubmit(submitHandler),
  }
}
