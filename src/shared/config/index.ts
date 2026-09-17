/**
 * Public API al segmentului `config`.
 *
 * `env.config.ts` nu este re-exportat intenționat: validează variabile de mediu
 * server-only și se importă direct doar din cod care rulează pe server
 * (`next.config.ts`, `proxy.ts`, `shared/api/server.config.ts`).
 */
export { APP_ROUTES } from "./routing/routing.const"
export type { AppRoute, AppRouteName } from "./routing/routing.const"
export type { RouteAccess, RouteOptions } from "./routing/routing.type"
export {
  findRouteByPathname,
  getRouteAccess,
  getRouteAccessByPathname,
  getRoutePath,
} from "./routing/routing.util"
