import "server-only"

import { cookies } from "next/headers"
import createClient from "openapi-fetch"

import { env } from "@shared/config/env"
import type { paths } from "@shared/lib/openapi"

/**
 * Client de API pentru codul care rulează pe serverul Next
 * (Server Components, Server Actions, Route Handlers).
 *
 * Lovește backendul direct pe `SERVER_API_URL`, fără rewrite: pe server nu
 * există origin relativ și nici cookie-uri implicite, deci sesiunea din
 * request-ul de intrare e citită din `next/headers` și retransmisă explicit.
 *
 * Se creează per request (cookies() e legat de request-ul curent), de aceea
 * e factory, nu instanță partajată.
 */
export async function createServerClient() {
  const cookieStore = await cookies()
  const session = cookieStore.get(env.SESSION_NAME)

  return createClient<paths>({
    baseUrl: env.SERVER_API_URL,
    headers: session ? { Cookie: `${env.SESSION_NAME}=${session.value}` } : undefined,
  })
}
