export const AUTH_ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    VERIFY_EMAIL: "/verify-email",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
} as const

export const APP_ROUTES = {
    ROOT: "/",
    ...AUTH_ROUTES,
} as const

export type AppRoutes = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]
