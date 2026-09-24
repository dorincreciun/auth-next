import { Compass } from "lucide-react"
import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { Button } from "@shared/ui/button"

export const NotFoundPage = () => {
  return (
    <main className="relative flex flex-1 items-center justify-center px-4 py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ea2845]/20 blur-3xl" />
      </div>

      <div className="relative flex max-w-md flex-col items-center gap-5 text-center">
        <span className="text-primary flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <Compass className="size-5" aria-hidden />
        </span>

        <div className="flex flex-col gap-2">
          <p className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
            Error 404
          </p>
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">Page not found</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The link you followed is wrong, or the page was moved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="sm">
            <Link href={getRoutePath(APP_ROUTES.PROFILE)}>Go to profile</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={getRoutePath(APP_ROUTES.LOGIN)}>Sign in</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
