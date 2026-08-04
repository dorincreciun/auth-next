import { Field, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

import { SECURITY_FORM_DEFAULTS } from "../model/constants"

export const EmailField = () => {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        defaultValue={SECURITY_FORM_DEFAULTS.email}
        placeholder="nume@exemplu.com"
      />
    </Field>
  )
}
