import Link from "next/link"

import { APP_ROUTES } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const LoginForm = () => {
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
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Parolă</FieldLabel>
            <Link
              href={APP_ROUTES.FORGOT_PASSWORD}
              className="text-muted-foreground ml-auto inline-block text-sm font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Ai uitat parola?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Autentificare
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Nu ai cont?{" "}
            <Link href={APP_ROUTES.REGISTER} className="font-medium text-primary hover:underline">
              Înregistrează-te
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
