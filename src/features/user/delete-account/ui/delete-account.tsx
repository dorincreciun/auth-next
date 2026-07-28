"use client"

import { Button } from "@shared/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"

export const DeleteAccount = () => {
  return (
    <Field
      orientation="horizontal"
      className="flex items-center justify-between gap-4 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3.5"
    >
      <FieldContent>
        <FieldLabel>Șterge contul</FieldLabel>
        <FieldDescription>
          Acțiune permanentă. Toate datele asociate contului vor fi eliminate.
        </FieldDescription>
      </FieldContent>
      <Button type="button" variant="destructive" size="sm" className="shrink-0" disabled>
        Șterge contul
      </Button>
    </Field>
  )
}
