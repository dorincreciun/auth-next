import { VerificationBadge } from "@entities/user"
import { SendVerifyEmail } from "@features/auth/verify-email"
import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

type EmailSectionProps = {
  email: string
  isVerified: boolean
}

export const EmailSection = ({ email, isVerified }: EmailSectionProps) => {
  return (
    <Section>
      <SectionTitle>Email</SectionTitle>
      <SectionDescription>Adresa folosită pentru autentificare și notificări.</SectionDescription>
      <SectionContent>
        <div className="flex flex-col gap-5">
          <Field>
            <div className="flex items-center justify-between gap-3">
              <FieldLabel htmlFor="account-email">Adresă de email</FieldLabel>
              <VerificationBadge isVerified={isVerified} />
            </div>
            <Input
              id="account-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              readOnly
              className="text-muted-foreground read-only:bg-white/[0.03] read-only:focus-visible:border-white/10 read-only:focus-visible:ring-0"
            />
            <FieldDescription>
              {isVerified
                ? "Adresa este confirmată. Schimbarea adresei nu este expusă de API."
                : "Confirmă adresa ca să poți salva modificările din cont."}
            </FieldDescription>
          </Field>

          {isVerified ? null : <SendVerifyEmail />}
        </div>
      </SectionContent>
    </Section>
  )
}
