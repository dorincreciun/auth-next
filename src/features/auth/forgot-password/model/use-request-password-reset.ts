"use client"

import { useCallback, useState } from "react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"

import { forgotPassword } from "../api/forgot-password"
import { FORGOT_PASSWORD_MESSAGES } from "../config/messages"

/**
 * Cere un cod de resetare pentru o adresă cunoscută (userul autentificat),
 * fără să mai treacă prin formularul care întreabă emailul.
 */
export const useRequestPasswordReset = (email: string) => {
  const router = useRouter()
  const [isRequesting, setIsRequesting] = useState(false)

  const request = useCallback(async () => {
    setIsRequesting(true)

    try {
      const response = await forgotPassword({ email })

      if (response.success) {
        toast.success(response.data.message || FORGOT_PASSWORD_MESSAGES.SUCCESS)

        const params = new URLSearchParams({
          email,
          expiresAt: response.data.tokenExpiresAt,
        })

        router.push(`${getRoutePath(APP_ROUTES.RESET_PASSWORD)}?${params.toString()}`)
        return
      }

      toast.error(response.message || FORGOT_PASSWORD_MESSAGES.ERROR)
    } catch {
      toast.error(FORGOT_PASSWORD_MESSAGES.ERROR)
    } finally {
      setIsRequesting(false)
    }
  }, [email, router])

  return {
    request,
    isRequesting,
  }
}
