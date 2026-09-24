"use client"

import type { UseFormRegister, FieldErrors } from "react-hook-form"

import { Field, FieldDescription, FieldError, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

import type { UpdateProfileRequest } from "../model/types"

type PersonalFieldsProps = {
  register: UseFormRegister<UpdateProfileRequest>
  errors: FieldErrors<UpdateProfileRequest>
  disabled?: boolean
}

export const PersonalFields = ({ register, errors, disabled }: PersonalFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field data-invalid={!!errors.firstName}>
        <FieldLabel htmlFor="firstName">First name</FieldLabel>
        <Input
          {...register("firstName")}
          id="firstName"
          autoComplete="given-name"
          placeholder="First name"
          disabled={disabled}
          aria-invalid={!!errors.firstName}
        />
        <FieldDescription>The name shown on your account.</FieldDescription>
        <FieldError errors={[errors.firstName]} />
      </Field>

      <Field data-invalid={!!errors.lastName}>
        <FieldLabel htmlFor="lastName">Last name</FieldLabel>
        <Input
          {...register("lastName")}
          id="lastName"
          autoComplete="family-name"
          placeholder="Last name"
          disabled={disabled}
          aria-invalid={!!errors.lastName}
        />
        <FieldDescription>The family name linked to the account.</FieldDescription>
        <FieldError errors={[errors.lastName]} />
      </Field>
    </div>
  )
}
