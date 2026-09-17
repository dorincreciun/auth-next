import { Monitor, Shield, User } from "lucide-react"

import { APP_ROUTES } from "@shared/config"

import type { ProfileNavItem } from "./types"

export const profileNavItems: ProfileNavItem[] = [
  { label: "Profil", icon: User, route: APP_ROUTES.PROFILE },
  { label: "Securitate", icon: Shield, route: APP_ROUTES.PROFILE_SECURITY },
  { label: "Dispozitive", icon: Monitor, route: APP_ROUTES.PROFILE_DEVICES },
]
