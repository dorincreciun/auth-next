import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const UpdateProfileForm = () => {
  return (
    <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      <Field>
        <FieldLabel htmlFor="location">Locație</FieldLabel>
        <Input id="location" name="location" defaultValue="București" placeholder="Oraș / țară" />
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
          className="text-foreground placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-primary/25 min-h-28 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-3"
        />
        <FieldDescription>O descriere scurtă pe care o vezi în profilul tău.</FieldDescription>
      </Field>

      <div className="flex justify-end pt-2 sm:col-span-2">
        <Button type="submit">Salvează modificările</Button>
      </div>
    </form>
  )
}
