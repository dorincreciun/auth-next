import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"
import { Switch } from "@shared/ui/switch"

export const TwoFactorSection = () => {
  return (
    <Section>
      <SectionTitle>Preferințe</SectionTitle>
      <SectionDescription>Opțiuni suplimentare pentru protecția contului.</SectionDescription>
      <SectionContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
            <label
              htmlFor="two-factor"
              className="text-muted-foreground text-sm font-medium"
              aria-disabled
            >
              Autentificare în doi pași
            </label>
            <Switch id="two-factor" name="twoFactor" className="shrink-0" disabled />
          </div>

          <Notice>Indisponibil momentan: API-ul nu implementează autentificarea în doi pași.</Notice>
        </div>
      </SectionContent>
    </Section>
  )
}
