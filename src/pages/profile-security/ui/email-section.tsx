import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

type EmailSectionProps = {
  email: string
}

export const EmailSection = ({ email }: EmailSectionProps) => {
  return (
    <Section>
      <SectionTitle>Email</SectionTitle>
      <SectionDescription>The address used to sign in and receive notifications.</SectionDescription>
      <SectionContent>
        <Field>
          <FieldLabel htmlFor="account-email">Email address</FieldLabel>
          <Input
            id="account-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            readOnly
            className="text-muted-foreground read-only:bg-white/[0.03] read-only:focus-visible:border-white/10 read-only:focus-visible:ring-0"
          />
          <FieldDescription>This address cannot be changed from the API.</FieldDescription>
        </Field>
      </SectionContent>
    </Section>
  )
}
