import { type NextRequest, NextResponse } from "next/server"

const protectedRoutes: string[] = []

export function proxy(request: NextRequest) {
    const sessionName = process.env.SESSION_NAME
    const session = sessionName ? request.cookies.get(sessionName) : undefined

    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route),
    )

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
