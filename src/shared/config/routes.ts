/**
 * Tipurile de acces posibile pentru o ruta:
 * - "public"     -> accesibila oricui, indiferent daca are sesiune sau nu
 * - "private"    -> necesita sesiune activa
 * - "guest-only" -> accesibila DOAR daca NU exista sesiune activa
 */
type RouteAccess = "public" | "private" | "guest-only"

interface RouteType {
  path: `/${string}`
  access: RouteAccess
}

/**
 * Configuratia centralizata a rutelor aplicatiei.
 * `satisfies` verifica structura (fiecare intrare respecta RouteType)
 * fara sa largeasca tipurile literale, spre deosebire de o adnotare
 * gen `Record<string, RouteType>`.
 */
export const APP_ROUTES = {
  ROOT: {
    path: "/",
    access: "public",
  },
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
    access: "public",
  },
  RESET_PASSWORD: {
    path: "/reset-password",
    access: "public",
  },

  PROFILE: {
    path: "/settings",
    access: "private",
  },
  SECURITY: {
    path: "/settings/security",
    access: "private",
  },
  DEVICES: {
    path: "/settings/devices",
    access: "private",
  },
} as const satisfies Record<string, RouteType>

export type AppRoutes = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]

export const getRoutePath = (route: AppRoutes) => route.path
export const getRouteAccess = (route: AppRoutes) => route.access

/**
 * Cauta ruta configurata care corespunde unui pathname dat.
 * Foloseste startsWith ca sa acopere si sub-rutele
 * Preferă match-ul cel mai specific (path-ul cel mai lung), ca "/settings/security"
 * să nu fie confundat cu "/settings" sau cu ROOT "/".
 */
export function findRouteByPathname(pathname: string): RouteType | undefined {
  return Object.values(APP_ROUTES)
    .filter((route) => pathname === route.path || pathname.startsWith(`${route.path}/`))
    .sort((a, b) => b.path.length - a.path.length)[0]
}

/**
 * Determina accesul necesar pentru un pathname dat.
 * Daca nu exista o ruta configurata pentru el, e tratat implicit ca "public".
 */
export function getRouteAccessByPathname(pathname: string): RouteAccess {
  return findRouteByPathname(pathname)?.access ?? "public"
}
