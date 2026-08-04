import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

import { PROFILE_FORM_DEFAULTS } from "../model/constants"

export const AboutFields = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field>
        <FieldLabel htmlFor="location">Locație</FieldLabel>
        <Input
          id="location"
          name="location"
          defaultValue={PROFILE_FORM_DEFAULTS.location}
          placeholder="Oraș / țară"
        />
        <FieldDescription>Orașul în care locuiești sau lucrezi.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="jobTitle">Job title</FieldLabel>
        <Input
          id="jobTitle"
          name="jobTitle"
          defaultValue={PROFILE_FORM_DEFAULTS.jobTitle}
          placeholder="Rolul tău"
        />
        <FieldDescription>Rolul sau poziția ta profesională.</FieldDescription>
      </Field>

      <Field className="sm:col-span-2">
        <FieldLabel htmlFor="bio">Biografie</FieldLabel>
        <textarea
          id="bio"
          name="bio"
          defaultValue={PROFILE_FORM_DEFAULTS.bio}
          placeholder="Scrie câteva rânduri despre tine..."
          className="text-foreground placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-primary/25 min-h-28 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-3"
        />
        <FieldDescription>O descriere scurtă pe care o vezi în profilul tău.</FieldDescription>
      </Field>
    </div>
  )
}
