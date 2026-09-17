import { RequestPasswordReset } from "@features/auth/forgot-password"
import { LockNotice } from "@shared/ui/lock-notice"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

type PasswordSectionProps = {
  email: string
  isVerified: boolean
}

export const PasswordSection = ({ email, isVerified }: PasswordSectionProps) => {
  return (
    <Section>
      <SectionTitle>Parolă</SectionTitle>
      <SectionDescription>Schimbă parola contului folosind un cod trimis pe email.</SectionDescription>
      <SectionContent>
        <div className="flex flex-col gap-3">
          <RequestPasswordReset email={email} disabled={!isVerified} />

          {isVerified ? null : (
            <LockNotice>
              Resetarea prin email cere o adresă confirmată — codul nu poate ajunge la o adresă
              neverificată.
            </LockNotice>
          )}

          <Notice>
            Schimbarea parolei direct din cont (cu parola curentă) nu este disponibilă: API-ul expune
            doar fluxul de resetare prin email.
          </Notice>
        </div>
      </SectionContent>
    </Section>
  )
}
