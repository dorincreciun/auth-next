import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const ForgotPasswordForm = () => {
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
          <FieldDescription>Îți vom trimite un cod de resetare pe această adresă.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Trimite codul
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
