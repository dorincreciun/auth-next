"use client"

import { Field, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const ChangeEmail = () => {
  return (
    <Field>
      <FieldLabel htmlFor="email" className="sr-only">
        Email
      </FieldLabel>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        defaultValue="ion.popescu@exemplu.com"
        placeholder="nume@exemplu.com"
      />
    </Field>
  )
}
