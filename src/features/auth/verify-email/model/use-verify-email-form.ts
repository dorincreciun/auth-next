"use client"

import { useCallback, useEffect, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { useForm } from "@shared/lib/hooks"

import { confirmEmailSchema } from "./schema"
import type { ConfirmEmailRequest, ConfirmEmailResponse } from "./types"
import { confirmEmail } from "../api/confirm-email"
import { sendVerifyEmail } from "../api/send-verify-email"
import { VERIFY_EMAIL_MESSAGES } from "../config/messages"

export const useVerifyEmailForm = () => {
  const router = useRouter()
  const [expiresAt, setExpiresAt] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(true)

  useEffect(() => {
    let cancelled = false

    const sendOnMount = async () => {
      try {
        const response = await sendVerifyEmail()

        if (cancelled) {
          return
        }

        if (response.success) {
          setExpiresAt(response.data.tokenExpiresAt)
          return
        }

        if (response.statusCode !== 400) {
          toast.error(response.message || VERIFY_EMAIL_MESSAGES.ERROR)
        }
      } catch {
        if (!cancelled) {
          toast.error(VERIFY_EMAIL_MESSAGES.ERROR)
        }
      } finally {
        if (!cancelled) {
          setIsSending(false)
        }
      }
    }

    void sendOnMount()

    return () => {
      cancelled = true
    }
  }, [])

  const sendCode = useCallback(async () => {
    setIsSending(true)

    try {
      const response = await sendVerifyEmail()

      if (response.success) {
        setExpiresAt(response.data.tokenExpiresAt)
        toast.success(response.data.message || VERIFY_EMAIL_MESSAGES.SENT)
        return
      }

      toast.error(response.message || VERIFY_EMAIL_MESSAGES.ERROR)
    } catch {
      toast.error(VERIFY_EMAIL_MESSAGES.ERROR)
    } finally {
      setIsSending(false)
    }
  }, [])

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
    resend: sendCode,
  }
}
