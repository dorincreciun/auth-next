"use client"

import type { UseFormRegister, FieldErrors } from "react-hook-form"

import { Field, FieldDescription, FieldError, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

import type { UpdateProfileRequest } from "../model/types"

type PersonalFieldsProps = {
  register: UseFormRegister<UpdateProfileRequest>
  errors: FieldErrors<UpdateProfileRequest>
}

export const PersonalFields = ({ register, errors }: PersonalFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field data-invalid={!!errors.firstName}>
        <FieldLabel htmlFor="firstName">Prenume</FieldLabel>
        <Input
          {...register("firstName")}
          id="firstName"
          autoComplete="given-name"
          placeholder="Prenume"
          aria-invalid={!!errors.firstName}
        />
        <FieldDescription>Numele afișat în contul tău.</FieldDescription>
        <FieldError errors={[errors.firstName]} />
      </Field>

      <Field data-invalid={!!errors.lastName}>
        <FieldLabel htmlFor="lastName">Nume</FieldLabel>
        <Input
          {...register("lastName")}
          id="lastName"
          autoComplete="family-name"
          placeholder="Nume"
          aria-invalid={!!errors.lastName}
        />
        <FieldDescription>Numele de familie asociat contului.</FieldDescription>
        <FieldError errors={[errors.lastName]} />
      </Field>
    </div>
  )
}
