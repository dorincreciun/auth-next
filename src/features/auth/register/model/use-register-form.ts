import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { useForm } from "@shared/lib/hooks"

import { registerSchema, type RegisterFormValues } from "./schema"
import { type RegisterResponse } from "./types"
import { registerUser } from "../api/register"

const REGISTER_ERROR_MESSAGE = "A apărut o eroare la înregistrare. Încearcă din nou."

export const useRegisterForm = () => {
  const router = useRouter()

  return useForm<RegisterFormValues, RegisterResponse>({
    onSubmit: ({ email, password }) => registerUser({ email, password }),
    onSuccess: () => {
      toast.success("Cont creat cu succes")
      router.replace(getRoutePath(APP_ROUTES.VERIFY_EMAIL))
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(REGISTER_ERROR_MESSAGE),
    formOptions: {
      resolver: zodResolver(registerSchema),
      mode: "onTouched",
      defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    },
  })
}
