"use client"

import { useTransition } from "react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"

import { revokeSession as revokeSessionRequest } from "../api/revoke-session"
import { REVOKE_SESSION_MESSAGES } from "../config/messages"

type UseRevokeSessionProps = {
  sessionId: string
  /** Revocarea sesiunii curente e permisă de API și echivalează cu un logout. */
  isCurrent?: boolean
}

export const useRevokeSession = ({ sessionId, isCurrent }: UseRevokeSessionProps) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const revoke = () => {
    if (isPending) {
      return
    }

    startTransition(async () => {
      try {
        const response = await revokeSessionRequest(sessionId)

        if (!response.success) {
          toast.error(response.message)
          return
        }

        if (isCurrent) {
          toast.success(REVOKE_SESSION_MESSAGES.SUCCESS_CURRENT)
          router.replace(getRoutePath(APP_ROUTES.LOGIN))
          return
        }

        toast.success(response.data.message || REVOKE_SESSION_MESSAGES.SUCCESS)
        router.refresh()
      } catch {
        toast.error(REVOKE_SESSION_MESSAGES.ERROR)
      }
    })
  }

  return {
    revoke,
    isPending,
  }
}
