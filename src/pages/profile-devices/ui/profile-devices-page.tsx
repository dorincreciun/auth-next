import { getDeviceLabel, SessionCard } from "@entities/session"
import { getSessions } from "@entities/session/server"
import { RevokeOtherSessionsButton } from "@features/session/revoke-other-sessions"
import { RevokeSessionButton } from "@features/session/revoke-session"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"
import { Leaflet } from "@widgets/leaflet"

export const ProfileDevicesPage = async () => {
  const sessions = await getSessions()
  const otherSessionsCount = sessions?.filter((session) => !session.isCurrent).length ?? 0

  return (
    <div className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <Section>
        <SectionTitle>Sesiuni active</SectionTitle>
        <SectionDescription>Dispozitivele conectate recent la contul tău.</SectionDescription>
        <SectionContent>
          {sessions === null ? (
            <Notice>
              Nu am putut încărca sesiunile active. Reîncarcă pagina în câteva momente.
            </Notice>
          ) : sessions.length === 0 ? (
            <Notice>Nu există sesiuni active înregistrate pentru contul tău.</Notice>
          ) : (
            <div className="flex flex-col gap-3">
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  action={
                    <RevokeSessionButton
                      sessionId={session.id}
                      deviceLabel={getDeviceLabel(session.deviceData)}
                      isCurrent={session.isCurrent}
                    />
                  }
                />
              ))}
            </div>
          )}
        </SectionContent>
      </Section>

      <Section variant="danger">
        <SectionTitle>Deconectare de pe celelalte dispozitive</SectionTitle>
        <SectionDescription>
          Încheie toate sesiunile în afară de cea curentă. Util dacă bănuiești un acces neautorizat.
        </SectionDescription>
        <SectionContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
              <p className="text-muted-foreground text-sm">
                {otherSessionsCount === 0
                  ? "Nu există alte dispozitive conectate"
                  : `${otherSessionsCount} ${otherSessionsCount === 1 ? "alt dispozitiv" : "alte dispozitive"} conectate`}
              </p>
              <RevokeOtherSessionsButton otherSessionsCount={otherSessionsCount} />
            </div>

            <Notice>
              Sesiunea curentă rămâne activă. Pentru a o închide, folosește butonul de deconectare
              din bara laterală.
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
              Harta rămâne fără marcaje: API-ul expune adresa IP a fiecărei sesiuni, dar nu
              coordonate geografice.
            </Notice>
          </div>
        </SectionContent>
      </Section>
    </div>
  )
}
