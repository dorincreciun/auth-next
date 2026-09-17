import { APP_ROUTES, type AppRoute } from "./routing.const"
import { type RouteAccess, type RouteOptions } from "./routing.type"

export const getRoutePath = (route: AppRoute) => route.path
export const getRouteAccess = (route: AppRoute) => route.access

/**
 * Cauta ruta configurata care corespunde unui pathname dat.
 * Foloseste startsWith ca sa acopere si sub-rutele
 * Preferă match-ul cel mai specific (path-ul cel mai lung), ca "/profile/security"
 * să nu fie confundat cu "/profile" sau cu ROOT "/".
 */
export function findRouteByPathname(pathname: string): RouteOptions | undefined {
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
