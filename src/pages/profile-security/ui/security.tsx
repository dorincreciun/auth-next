"use client"

import { ChangeEmail } from "@features/user/change-email"
import { ChangePassword } from "@features/user/change-password"
import { ToggleTwoFactor } from "@features/user/toggle-two-factor"
import { Button } from "@shared/ui/button"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const SettingsSecurityPage = () => {
  return (
    <form className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul acoperă doar resetarea parolei prin email,
        nu și schimbarea parolei din cont, schimbarea adresei sau autentificarea în doi pași.
      </Notice>

      <Section>
        <SectionTitle>Email</SectionTitle>
        <SectionDescription>Adresa folosită pentru autentificare și notificări.</SectionDescription>
        <SectionContent>
          <ChangeEmail />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Parolă</SectionTitle>
        <SectionDescription>Actualizează parola contului tău.</SectionDescription>
        <SectionContent>
          <ChangePassword />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Preferințe</SectionTitle>
        <SectionDescription>Opțiuni suplimentare pentru protecția contului.</SectionDescription>
        <SectionContent>
          <ToggleTwoFactor />
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
