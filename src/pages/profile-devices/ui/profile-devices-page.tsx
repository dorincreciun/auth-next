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
        <SectionTitle>Active sessions</SectionTitle>
        <SectionDescription>Devices recently signed in to your account.</SectionDescription>
        <SectionContent>
          {sessions === null ? (
            <Notice>Could not load active sessions. Reload the page in a moment.</Notice>
          ) : sessions.length === 0 ? (
            <Notice>There are no active sessions recorded for your account.</Notice>
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
        <SectionTitle>Sign out other devices</SectionTitle>
        <SectionDescription>
          End every session except the current one. Useful if you suspect unauthorized access.
        </SectionDescription>
        <SectionContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
              <p className="text-muted-foreground text-sm">
                {otherSessionsCount === 0
                  ? "There are no other connected devices"
                  : `${otherSessionsCount} other ${otherSessionsCount === 1 ? "device" : "devices"} connected`}
              </p>
              <RevokeOtherSessionsButton otherSessionsCount={otherSessionsCount} />
            </div>

            <Notice>
              The current session stays active. To close it, use the sign-out button in the sidebar.
            </Notice>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Locations</SectionTitle>
        <SectionDescription>Where your sessions have been active.</SectionDescription>
        <SectionContent>
          <div className="flex flex-col gap-3">
            <Leaflet className="h-80 overflow-hidden border border-white/10" />

            <Notice>
              The map has no markers: the API exposes each session's IP address, but not geographic
              coordinates.
            </Notice>
          </div>
        </SectionContent>
      </Section>
    </div>
  )
}
