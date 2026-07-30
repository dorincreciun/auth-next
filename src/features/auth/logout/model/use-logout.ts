import { useCallback, useTransition } from "react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { APP_ROUTES, getRoutePath } from "@shared/config"

import { logout } from "../api/logout"

const LOGOUT_ERROR_MESSAGE = "A apărut o eroare la delogare. Încearcă din nou."

export const useLogout = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      try {
        const response = await logout()

        if (response.success) {
          toast.success(response.data.message)
          router.push(getRoutePath(APP_ROUTES.LOGIN))
          router.refresh()
        } else {
          toast.error(response.message)
        }
      } catch (err) {
        console.error("Logout failed:", err)
        toast.error(LOGOUT_ERROR_MESSAGE)
      }
    })
  }, [router])

  return { isPending, logout: handleLogout }
}
