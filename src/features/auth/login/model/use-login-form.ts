import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { useForm } from "@shared/lib/hooks"

import { loginSchema } from "./schema"
import { type LoginPayload, type LoginResponse } from "./types"
import { login } from "../api/login"

const LOGIN_ERROR_MESSAGE = "A apărut o eroare la autentificare. Încearcă din nou."

export const useLoginForm = () => {
  const router = useRouter()

  return useForm<LoginPayload, LoginResponse>({
    onSubmit: (data) => login(data),
    onSuccess: () => {
      toast.success("Autentificare reușită")
      router.replace(getRoutePath(APP_ROUTES.PROFILE))
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(LOGIN_ERROR_MESSAGE),
    formOptions: {
      resolver: zodResolver(loginSchema),
      mode: "onTouched",
      defaultValues: {
        email: "",
        password: "",
      },
    },
  })
}
