import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const ResetPasswordForm = () => {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nume@exemplu.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="token">Cod de verificare</FieldLabel>
          <Input
            id="token"
            name="token"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="123456"
            maxLength={6}
            required
          />
          <FieldDescription>Introdu codul de 6 cifre primit pe email.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Parolă nouă</FieldLabel>
          <Input
            id="password"
            name="newPassword"
            type="password"
            autoComplete="new-password"
            required
          />
          <FieldDescription>Minim 8 caractere, cu litere și cifre.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirmă parola</FieldLabel>
          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
          />
          <FieldDescription>Reintrodu parola nouă pentru confirmare.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Resetează parola
          </Button>
          <FieldDescription className="text-center">
            <Link
              href={getRoutePath(APP_ROUTES.LOGIN)}
              className="text-primary font-medium hover:underline"
            >
              Înapoi la autentificare
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
