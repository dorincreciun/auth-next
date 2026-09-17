"use client"

import { useCallback, useEffect, useState } from "react"

import { toast } from "sonner"

import { sendVerifyEmail } from "../api/send-verify-email"
import { VERIFY_EMAIL_MESSAGES } from "../config/messages"

/**
 * 400 = emailul e deja confirmat sau codul trimis anterior e încă valid.
 * La trimiterea automată nu e o eroare pe care userul trebuie să o vadă.
 */
const CODE_STILL_VALID_STATUS = 400

type UseSendVerifyEmailOptions = {
  /** Cere un cod imediat la montare, ca în fluxul paginii de verificare. */
  sendOnMount?: boolean
}

export const useSendVerifyEmail = ({ sendOnMount = false }: UseSendVerifyEmailOptions = {}) => {
  const [expiresAt, setExpiresAt] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(sendOnMount)

  useEffect(() => {
    if (!sendOnMount) {
      return
    }

    let cancelled = false

    const sendSilently = async () => {
      try {
        const response = await sendVerifyEmail()

        if (cancelled) {
          return
        }

        if (response.success) {
          setExpiresAt(response.data.tokenExpiresAt)
          return
        }

        if (response.statusCode !== CODE_STILL_VALID_STATUS) {
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

    void sendSilently()

    return () => {
      cancelled = true
    }
  }, [sendOnMount])

  const send = useCallback(async () => {
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

  return {
    expiresAt,
    isSending,
    send,
  }
}
