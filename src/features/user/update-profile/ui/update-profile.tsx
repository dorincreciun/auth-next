"use client"

import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const UpdateProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field>
        <FieldLabel htmlFor="firstName">Prenume</FieldLabel>
        <Input
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          defaultValue="Ion"
          placeholder="Ion"
        />
        <FieldDescription>Numele afișat în contul tău.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="lastName">Nume</FieldLabel>
        <Input
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          defaultValue="Popescu"
          placeholder="Popescu"
        />
        <FieldDescription>Numele de familie asociat contului.</FieldDescription>
      </Field>
    </div>
  )
}
