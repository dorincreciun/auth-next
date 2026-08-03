import { type NextRequest, NextResponse } from "next/server"

import { APP_ROUTES, getRouteAccessByPathname, getRoutePath } from "@shared/config/routing"

export function proxy(request: NextRequest) {
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
   * o sesiune activa -> redirect catre zona privata
   */
  if (access === "guest-only" && session) {
    return NextResponse.redirect(new URL(APP_ROUTES.PROFILE.path, request.url))
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
