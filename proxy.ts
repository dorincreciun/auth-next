import { type NextRequest, NextResponse } from "next/server"

import { APP_ROUTES, getRouteAccessByPathname, getRoutePath } from "@shared/config"

/**
 * Cookie-ul poate exista, dar sesiunea pe server e expirată/invalidă.
 * Fără validare, guest-only redirectează la /profile, iar pagina (getMe → 401)
 * redirectează înapoi la /login → buclă 307 infinită.
 */
async function isSessionValid(request: NextRequest): Promise<boolean> {
  const apiUrl = process.env.API_URL
  if (!apiUrl) {
    return false
  }

  const basePath = process.env.API_BASE_PATH ?? "/api/v1"

  try {
    const response = await fetch(`${apiUrl}${basePath}/auth/me`, {
      headers: {
        cookie: request.headers.get("cookie") ?? "",
      },
      cache: "no-store",
    })

    return response.ok
  } catch {
    return false
  }
}

function clearSessionCookie(response: NextResponse, sessionName: string, hostname: string) {
  const expired = {
    name: sessionName,
    value: "",
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax" as const,
  }

  // Host-only + (dacă e cazul) Domain=hostname — backend-ul setează Domain=localhost.
  response.cookies.set(expired)
  if (hostname === "localhost" || hostname.includes(".")) {
    response.cookies.set({ ...expired, domain: hostname })
  }
}

export async function proxy(request: NextRequest) {
  const sessionName = process.env.SESSION_NAME
  const session = sessionName ? request.cookies.get(sessionName) : undefined

  const { pathname } = request.nextUrl

  const access = getRouteAccessByPathname(pathname)

  /**
   * Ruta necesita sesiune activa, dar nu exista -> redirect catre /login
   */
  if (access === "private" && !session) {
    return NextResponse.redirect(new URL(APP_ROUTES.LOGIN.path, request.url))
  }

  /**
   * Ruta e doar pentru vizitatori (guest-only), dar userul are deja
   * o sesiune activa -> redirect catre zona privata.
   * Dacă cookie-ul e mort, îl ștergem și lăsăm pagina guest să se randeze.
   */
  if (access === "guest-only" && session && sessionName) {
    if (await isSessionValid(request)) {
      return NextResponse.redirect(new URL(APP_ROUTES.PROFILE.path, request.url))
    }

    const response = NextResponse.next()
    clearSessionCookie(response, sessionName, request.nextUrl.hostname)
    return response
  }

  /**
   * /reset-password cere query params valide din flow-ul forgot-password:
   * - `email` prezent
   * - `expiresAt` (ISO) prezent, valid și încă în viitor
   *
   * Altfel redirect către /forgot-password ca să solicite un cod nou.
   * Atenție: condiția trebuie să fie DOAR pe această rută — nu pe `!session`,
   * altfel login/register/API fără sesiune ar fi redirecționate greșit.
   */
  if (pathname === getRoutePath(APP_ROUTES.RESET_PASSWORD)) {
    const email = request.nextUrl.searchParams.get("email")?.trim()
    const expiresAt = request.nextUrl.searchParams.get("expiresAt")
    const expiresAtDate = expiresAt ? new Date(expiresAt) : null
    const isExpired =
      !expiresAtDate ||
      Number.isNaN(expiresAtDate.getTime()) ||
      expiresAtDate.getTime() <= Date.now()

    if (!email || isExpired) {
      return NextResponse.redirect(new URL(getRoutePath(APP_ROUTES.FORGOT_PASSWORD), request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
