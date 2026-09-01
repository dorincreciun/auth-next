import { Button } from "@shared/ui/button"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

import { EmailField } from "./email-field"
import { PasswordFields } from "./password-fields"
import { TwoFactorField } from "./two-factor-field"

type UpdateSecurityFormProps = {
  email: string
  isVerified: boolean
}

export const UpdateSecurityForm = ({ email, isVerified }: UpdateSecurityFormProps) => {
  return (
    <form className="[&>section:not(:last-of-type)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-of-type)]:border-b [&>section:not(:last-of-type)]:pb-10">
      <Section>
        <SectionTitle>Email</SectionTitle>
        <SectionDescription>Adresa folosită pentru autentificare și notificări.</SectionDescription>
        <SectionContent>
          <EmailField email={email} isVerified={isVerified} />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Parolă</SectionTitle>
        <SectionDescription>Actualizează parola contului tău.</SectionDescription>
        <SectionContent>
          <PasswordFields />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Preferințe</SectionTitle>
        <SectionDescription>Opțiuni suplimentare pentru protecția contului.</SectionDescription>
        <SectionContent>
          <TwoFactorField />
        </SectionContent>
      </Section>

      <div className="flex justify-end">
        <Button type="submit" disabled>
          Salvează modificările
        </Button>
      </div>
    </form>
  )
}
