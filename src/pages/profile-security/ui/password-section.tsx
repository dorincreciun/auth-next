import { RequestPasswordReset } from "@features/auth/forgot-password"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

type PasswordSectionProps = {
  email: string
}

export const PasswordSection = ({ email }: PasswordSectionProps) => {
  return (
    <Section>
      <SectionTitle>Password</SectionTitle>
      <SectionDescription>Change your account password with a code sent by email.</SectionDescription>
      <SectionContent>
        <RequestPasswordReset email={email} />
      </SectionContent>
    </Section>
  )
}
