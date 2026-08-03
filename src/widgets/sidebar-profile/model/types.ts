import type { LucideIcon } from "lucide-react"

import type { AppRoutes } from "@shared/config/routing"

export type ProfileNavItem = {
  label: string
  icon: LucideIcon
  route: AppRoutes
}
