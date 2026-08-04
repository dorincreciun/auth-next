import type { UserProfile } from "@entities/user"
import { Button } from "@shared/ui/button"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

import { AboutFields } from "./about-fields"
import { PersonalFields } from "./personal-fields"

type UpdateProfileFormProps = {
  profile: UserProfile | null
}

export const UpdateProfileForm = ({ profile }: UpdateProfileFormProps) => {
  const firstName = profile?.firstName ?? null
  const lastName = profile?.lastName ?? null
  const location = profile?.location ?? null
  const jobTitle = profile?.jobTitle ?? null
  const bio = profile?.bio ?? null

  return (
    <form className="[&>section:not(:last-of-type)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-of-type)]:border-b [&>section:not(:last-of-type)]:pb-10">
      <Section>
        <SectionTitle>Informații personale</SectionTitle>
        <SectionDescription>Actualizează datele afișate în contul tău.</SectionDescription>
        <SectionContent>
          <PersonalFields firstName={firstName} lastName={lastName} />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Despre tine</SectionTitle>
        <SectionDescription>Locație, job title și o biografie scurtă.</SectionDescription>
        <SectionContent>
          <AboutFields location={location} jobTitle={jobTitle} bio={bio} />
        </SectionContent>
      </Section>

      <div className="flex justify-end">
        <Button type="submit">Salvează modificările</Button>
      </div>
    </form>
  )
}
