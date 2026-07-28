"use client"

import { ChangeEmail } from "@features/user/change-email"
import { ChangePassword } from "@features/user/change-password"
import { ToggleTwoFactor } from "@features/user/toggle-two-factor"
import { Button } from "@shared/ui/button"
import { Notice } from "@shared/ui/notice"
import { Section } from "@shared/ui/section"

export const SettingsSecurityPage = () => {
  return (
    <form className="flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:border-border/50 [&>section:not(:last-child)]:pb-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul acoperă doar resetarea parolei prin
        email, nu și schimbarea parolei din cont, schimbarea adresei sau autentificarea în doi
        pași.
      </Notice>

      <Section title="Parolă" description="Actualizează parola contului tău.">
        <ChangePassword />
      </Section>

      <Section
        title="Email"
        description="Adresa folosită pentru autentificare și notificări."
      >
        <ChangeEmail />
      </Section>

      <Section
        title="Preferințe"
        description="Opțiuni suplimentare pentru protecția contului."
      >
        <ToggleTwoFactor />
      </Section>

      <div className="flex justify-end">
        <Button type="submit" disabled>
          Salvează modificările
        </Button>
      </div>
    </form>
  )
}
