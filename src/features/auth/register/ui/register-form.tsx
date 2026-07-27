import Link from "next/link"

import { APP_ROUTES } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const RegisterForm = () => {
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
          <FieldDescription>Vei primi un cod de verificare pe această adresă.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Parolă</FieldLabel>
          <Input
            id="password"
            name="password"
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
          <FieldDescription>Reintrodu parola pentru confirmare.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Creează cont
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Ai deja cont?{" "}
            <Link href={APP_ROUTES.LOGIN} className="text-primary font-medium hover:underline">
              Autentifică-te
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
