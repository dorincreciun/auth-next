"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { useForm } from "@shared/lib/hooks"

import { confirmEmailSchema } from "./schema"
import type { ConfirmEmailRequest, ConfirmEmailResponse } from "./types"
import { useSendVerifyEmail } from "./use-send-verify-email"
import { confirmEmail } from "../api/confirm-email"
import { VERIFY_EMAIL_MESSAGES } from "../config/messages"

export const useVerifyEmailForm = () => {
  const router = useRouter()
  const { expiresAt, isSending, send } = useSendVerifyEmail({ sendOnMount: true })

  const form = useForm<ConfirmEmailRequest, ConfirmEmailResponse>({
    onSubmit: (values) => confirmEmail(values),
    onSuccess: (data) => {
      toast.success(data.message || VERIFY_EMAIL_MESSAGES.SUCCESS)
      router.replace(getRoutePath(APP_ROUTES.PROFILE))
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(VERIFY_EMAIL_MESSAGES.ERROR),
    formOptions: {
      mode: "onTouched",
      resolver: zodResolver(confirmEmailSchema),
      defaultValues: {
        token: "",
      },
    },
  })

  return {
    ...form,
    expiresAt,
    isSending,
    resend: send,
  }
}
