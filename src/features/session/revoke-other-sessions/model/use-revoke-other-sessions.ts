"use client"

import { useTransition } from "react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { revokeOtherSessions as revokeOtherSessionsRequest } from "../api/revoke-other-sessions"
import { REVOKE_OTHER_SESSIONS_MESSAGES } from "../config/messages"

export const useRevokeOtherSessions = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const revokeOthers = () => {
    if (isPending) {
      return
    }

    startTransition(async () => {
      try {
        const response = await revokeOtherSessionsRequest()

        if (!response.success) {
          toast.error(response.message)
          return
        }

        const { message, revoked } = response.data

        if (revoked === 0) {
          toast.info(REVOKE_OTHER_SESSIONS_MESSAGES.NOTHING_TO_REVOKE)
          return
        }

        toast.success(message)
        router.refresh()
      } catch {
        toast.error(REVOKE_OTHER_SESSIONS_MESSAGES.ERROR)
      }
    })
  }

  return {
    revokeOthers,
    isPending,
  }
}
