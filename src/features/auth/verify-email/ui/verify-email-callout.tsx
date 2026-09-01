import { MailWarning } from "lucide-react"
import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { Button } from "@shared/ui/button"

type VerifyEmailCalloutProps = {
  email: string
}

export const VerifyEmailCallout = ({ email }: VerifyEmailCalloutProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-4 sm:flex-row sm:items-center">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 text-amber-300">
        <MailWarning className="size-4" aria-hidden />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-foreground text-sm font-semibold tracking-tight">
          Confirmă adresa de email
        </p>
        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
          Contul <span className="text-foreground">{email}</span> este activ, dar neconfirmat. Poți
          naviga prin setări, însă salvarea profilului și schimbarea avatarului rămân blocate.
        </p>
      </div>

      <Button asChild size="sm" className="shrink-0">
        <Link href={getRoutePath(APP_ROUTES.VERIFY_EMAIL)}>Verifică emailul</Link>
      </Button>
    </div>
  )
}
