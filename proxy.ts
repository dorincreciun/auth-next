import { type NextRequest, NextResponse } from "next/server"

import { APP_ROUTES, getRouteAccessByPathname } from "@shared/config"

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

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
