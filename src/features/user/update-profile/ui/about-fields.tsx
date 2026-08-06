"use client"

import type { UseFormRegister, FieldErrors } from "react-hook-form"

import { Field, FieldDescription, FieldError, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

import type { UpdateProfileRequest } from "../model/types"

type AboutFieldsProps = {
  register: UseFormRegister<UpdateProfileRequest>
  errors: FieldErrors<UpdateProfileRequest>
}

export const AboutFields = ({ register, errors }: AboutFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field data-invalid={!!errors.location}>
        <FieldLabel htmlFor="location">Locație</FieldLabel>
        <Input
          {...register("location")}
          id="location"
          placeholder="Oraș / țară"
          aria-invalid={!!errors.location}
        />
        <FieldDescription>Orașul în care locuiești sau lucrezi.</FieldDescription>
        <FieldError errors={[errors.location]} />
      </Field>

      <Field data-invalid={!!errors.jobTitle}>
        <FieldLabel htmlFor="jobTitle">Job title</FieldLabel>
        <Input
          {...register("jobTitle")}
          id="jobTitle"
          placeholder="Rolul tău"
          aria-invalid={!!errors.jobTitle}
        />
        <FieldDescription>Rolul sau poziția ta profesională.</FieldDescription>
        <FieldError errors={[errors.jobTitle]} />
      </Field>

      <Field className="sm:col-span-2" data-invalid={!!errors.bio}>
        <FieldLabel htmlFor="bio">Biografie</FieldLabel>
        <textarea
          {...register("bio")}
          id="bio"
          placeholder="Scrie câteva rânduri despre tine..."
          aria-invalid={!!errors.bio}
          className="text-foreground placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-primary/25 min-h-28 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-3"
        />
        <FieldDescription>O descriere scurtă pe care o vezi în profilul tău.</FieldDescription>
        <FieldError errors={[errors.bio]} />
      </Field>
    </div>
  )
}
