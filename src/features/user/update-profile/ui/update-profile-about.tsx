"use client"

import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const UpdateProfileAbout = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field>
        <FieldLabel htmlFor="location">Locație</FieldLabel>
        <Input
          id="location"
          name="location"
          defaultValue="București"
          placeholder="Oraș / țară"
        />
        <FieldDescription>Orașul în care locuiești sau lucrezi.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="jobTitle">Job title</FieldLabel>
        <Input
          id="jobTitle"
          name="jobTitle"
          defaultValue="Software Engineer"
          placeholder="Rolul tău"
        />
        <FieldDescription>Rolul sau poziția ta profesională.</FieldDescription>
      </Field>

      <Field className="sm:col-span-2">
        <FieldLabel htmlFor="bio">Biografie</FieldLabel>
        <textarea
          id="bio"
          name="bio"
          defaultValue="Scrie câteva rânduri despre tine..."
          placeholder="Scrie câteva rânduri despre tine..."
          className="min-h-28 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-3 focus-visible:ring-primary/25"
        />
        <FieldDescription>
          O descriere scurtă pe care o vezi în profilul tău.
        </FieldDescription>
      </Field>
    </div>
  )
}
