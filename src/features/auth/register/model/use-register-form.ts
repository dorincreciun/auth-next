import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import { APP_ROUTES } from "@shared/config"
import { useForm } from "@shared/lib/hooks"

import { registerSchema, type RegisterFormValues } from "./schema"
import { type RegisterResponse } from "./types"
import { registerUser } from "../api/register"

export const useRegisterForm = () => {
  const router = useRouter()

  return useForm<RegisterFormValues, RegisterResponse>({
    onSubmit: ({ email, password }) => registerUser({ email, password }),
    onSuccess: () => router.replace(APP_ROUTES.VERIFY_EMAIL),
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
