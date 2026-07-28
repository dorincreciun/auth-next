"use client"

import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-5">
      <Field>
        <FieldLabel htmlFor="current-password">Parola curentă</FieldLabel>
        <Input
          id="current-password"
          name="currentPassword"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
        />
        <FieldDescription>Introdu parola actuală pentru confirmare.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="new-password">Parolă nouă</FieldLabel>
        <Input
          id="new-password"
          name="newPassword"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
        />
        <FieldDescription>Minim 8 caractere, cu litere și cifre.</FieldDescription>
      </Field>
    </div>
  )
}
