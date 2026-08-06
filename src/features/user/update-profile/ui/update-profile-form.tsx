"use client"

import type { UserProfile } from "@entities/user"
import { Button } from "@shared/ui/button"
import { Field, FieldError } from "@shared/ui/field"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

import { AboutFields } from "./about-fields"
import { PersonalFields } from "./personal-fields"
import { useUpdateProfile } from "../model/use-update-profile"

type UpdateProfileFormProps = {
  profile: UserProfile | null
}

export const UpdateProfileForm = ({ profile }: UpdateProfileFormProps) => {
  const { register, handleFormSubmit, formState } = useUpdateProfile({
    defaultValues: {
      firstName: profile?.firstName ?? "",
      lastName: profile?.lastName ?? "",
      location: profile?.location ?? "",
      jobTitle: profile?.jobTitle ?? "",
      bio: profile?.bio ?? "",
    },
  })
  const { errors, isSubmitting, isDirty } = formState

  return (
    <form
      onSubmit={handleFormSubmit}
      noValidate
      className="[&>section:not(:last-of-type)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-of-type)]:border-b [&>section:not(:last-of-type)]:pb-10"
    >
      <Section>
        <SectionTitle>Informații personale</SectionTitle>
        <SectionDescription>Actualizează datele afișate în contul tău.</SectionDescription>
        <SectionContent>
          <PersonalFields register={register} errors={errors} />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Despre tine</SectionTitle>
        <SectionDescription>Locație, job title și o biografie scurtă.</SectionDescription>
        <SectionContent>
          <AboutFields register={register} errors={errors} />
        </SectionContent>
      </Section>

      {!!errors.root && (
        <Field data-invalid>
          <FieldError errors={[errors.root]} />
        </Field>
      )}

      <div className="flex justify-end">
        <Button type="submit" disabled={!isDirty || isSubmitting}>
          {isSubmitting ? "Se salvează…" : "Salvează modificările"}
        </Button>
      </div>
    </form>
  )
}
