import {RouteOptions} from "./routing.type";

export const APP_ROUTES: Record<string, RouteOptions> = {
    ROOT: {
        path: "/",
        access: "public",
    },

    /* Auth routes */
    LOGIN: {
        path: '/login',
        access: 'guest-only',
    },
    REGISTER: {
        path: '/register',
        access: 'guest-only',
    },
    FORGOT_PASSWORD: {
        path: "/forgot-password",
        access: "guest-only",
    },
    VERIFY_EMAIL: {
        path: "/verify-email",
        access: "public",
    },
    RESET_PASSWORD: {
        path: "/reset-password",
        access: "public",
    },

    /* Profile */
    PROFILE: {
        path: '/profile',
        access: 'private',
    }
} as const;

export type AppRoutes = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]