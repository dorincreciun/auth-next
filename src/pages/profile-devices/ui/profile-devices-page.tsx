import { Button } from "@shared/ui/button"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"
import { Leaflet } from "@widgets/leaflet"

export const ProfileDevicesPage = () => {
  return (
    <div className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <Section>
        <SectionTitle>Sesiuni active</SectionTitle>
        <SectionDescription>Dispozitivele conectate recent la contul tău.</SectionDescription>
        <SectionContent>
          <Notice>
            Sesiunile sunt indexate pe server, dar API-ul nu expune încă un endpoint de listare.
            Lista dispozitivelor apare aici imediat ce endpoint-ul devine disponibil.
          </Notice>
        </SectionContent>
      </Section>

      <Section variant="danger">
        <SectionTitle>Deconectare de pe toate dispozitivele</SectionTitle>
        <SectionDescription>
          Încheie toate sesiunile active, inclusiv cea curentă.
        </SectionDescription>
        <SectionContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
              <p className="text-muted-foreground text-sm">Include și sesiunea curentă</p>
              <Button type="button" variant="outline" size="sm" className="shrink-0" disabled>
                Deconectează
              </Button>
            </div>

            <Notice>
              Indisponibil momentan: invalidarea tuturor sesiunilor nu este expusă de API. Deocamdată
              te poți deconecta doar de pe dispozitivul curent, din bara laterală.
            </Notice>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Locații</SectionTitle>
        <SectionDescription>Unde au fost active sesiunile tale.</SectionDescription>
        <SectionContent>
          <div className="flex flex-col gap-3">
            <Leaflet className="h-80 overflow-hidden border border-white/10" />

            <Notice>
              Harta rămâne fără marcaje până când sesiunile — împreună cu datele lor de dispozitiv —
              sunt expuse de API.
            </Notice>
          </div>
        </SectionContent>
      </Section>
    </div>
  )
}
