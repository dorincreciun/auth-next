import { ListDevices } from "@features/user/list-devices"
import { SignOutAllDevices } from "@features/user/sign-out-all-devices"
import { Notice } from "@shared/ui/notice"
import { Section } from "@shared/ui/section"
import { Leaflet } from "@widgets/leaflet"

export const SettingsDevicesPage = () => {
  return (
    <div className="flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:border-border/50 [&>section:not(:last-child)]:pb-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul nu expune încă sesiuni sau dispozitive,
        iar lista și harta afișează date statice.
      </Notice>

      <Section title="Sesiuni active" description="Dispozitivele conectate recent la contul tău.">
        <ListDevices />
      </Section>

      <Section
        title="Deconectare de pe toate dispozitivele"
        description="Încheie toate sesiunile active, inclusiv cea curentă."
      >
        <SignOutAllDevices />
      </Section>

      <Section title="Locații" description="Unde au fost active sesiunile tale.">
        <Leaflet />
      </Section>
    </div>
  )
}
