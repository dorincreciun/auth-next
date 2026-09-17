import { type RouteOptions } from "./routing.type"

export const APP_ROUTES = {
  ROOT: {
    path: "/",
    access: "private",
  },

  /* Auth routes */
  LOGIN: {
    path: "/login",
    access: "guest-only",
  },
  REGISTER: {
    path: "/register",
    access: "guest-only",
  },
  FORGOT_PASSWORD: {
    path: "/forgot-password",
    access: "guest-only",
  },
  VERIFY_EMAIL: {
    path: "/verify-email",
    access: "private",
  },
  RESET_PASSWORD: {
    path: "/reset-password",
    access: "public",
  },

  /* Profile */
  PROFILE: {
    path: "/profile",
    access: "private",
  },

  PROFILE_SECURITY: {
    path: "/profile/security",
    access: "private",
  },

  PROFILE_DEVICES: {
    path: "/profile/devices",
    access: "private",
  },
} as const satisfies Record<string, RouteOptions>

export type AppRouteName = keyof typeof APP_ROUTES
export type AppRoute = (typeof APP_ROUTES)[AppRouteName]
