import Link from "next/link"

import { VerificationBadge } from "@entities/user"
import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

type EmailFieldProps = {
  email: string
  isVerified: boolean
}

export const EmailField = ({ email, isVerified }: EmailFieldProps) => {
  return (
    <Field>
      <div className="flex items-center justify-between gap-3">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <VerificationBadge isVerified={isVerified} />
      </div>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        readOnly
        className="text-muted-foreground read-only:bg-white/[0.03] read-only:focus-visible:border-white/10 read-only:focus-visible:ring-0"
      />
      {isVerified ? (
        <FieldDescription>Adresa folosită pentru autentificare și notificări.</FieldDescription>
      ) : (
        <FieldDescription>
          Confirmă această adresă ca să poți salva modificările din cont.{" "}
          <Link
            href={getRoutePath(APP_ROUTES.VERIFY_EMAIL)}
            className="text-primary font-medium hover:underline"
          >
            Verifică emailul
          </Link>
        </FieldDescription>
      )}
    </Field>
  )
}
