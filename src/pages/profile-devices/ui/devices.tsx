import { FAKE_DEVICES, ListDevices } from "@features/list-devices"
import { SignOutAllDevices } from "@features/sign-out-all-devices"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"
import { Leaflet } from "@widgets/leaflet"

export const SettingsDevicesPage = () => {
  const locations = FAKE_DEVICES.map((device) => ({
    position: device.position,
    description: (
      <div className="space-y-0.5">
        <p className="font-medium">{device.name}</p>
        <p className="text-muted-foreground text-xs">{device.location}</p>
      </div>
    ),
  }))

  return (
    <div className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <Section>
        <SectionTitle>Sesiuni active</SectionTitle>
        <SectionDescription>Dispozitivele conectate recent la contul tău.</SectionDescription>
        <SectionContent>
          <ListDevices />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Deconectare de pe toate dispozitivele</SectionTitle>
        <SectionDescription>
          Încheie toate sesiunile active, inclusiv cea curentă.
        </SectionDescription>
        <SectionContent>
          <SignOutAllDevices />
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Locații</SectionTitle>
        <SectionDescription>Unde au fost active sesiunile tale.</SectionDescription>
        <SectionContent>
          <Leaflet locations={locations} className="h-80 overflow-hidden border border-white/10" />
        </SectionContent>
      </Section>
    </div>
  )
}
