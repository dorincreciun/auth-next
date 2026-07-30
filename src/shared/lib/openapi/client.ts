import createClient from "openapi-fetch"

import type { paths } from "./v1"

/**
 * Client de API pentru browser.
 *
 * Merge prin rewrite-ul Next (`/api/*` → `SERVER_API_URL/*` din next.config.ts),
 * deci cererile sunt same-origin: nu există CORS, iar cookie-ul de sesiune
 * HttpOnly circulă automat în ambele direcții (`credentials: "include"`).
 *
 * Nu funcționează pe server: baseUrl-ul relativ nu poate fi rezolvat de fetch
 * în Node, iar cookie-urile nu s-ar propaga. Pe server folosește
 * `createServerClient` din `@shared/lib/openapi-server`.
 */
export const client = createClient<paths>({
  baseUrl: "/api",
  credentials: "include",
})

client.use({
  onRequest({ request }) {
    if (typeof window === "undefined") {
      throw new Error(
        "`client` din @shared/lib/openapi este doar pentru browser. " +
          "Pe server folosește `createServerClient` din @shared/lib/openapi-server.",
      )
    }
    return request
  },
})
