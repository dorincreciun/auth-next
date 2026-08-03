import { ChangeAvatar } from "@features/change-avatar"
import { DeleteAccountForm } from "@features/delete-account"
import { UpdateProfileForm } from "@features/update-profile"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const DefaultProfilePage = () => {
  return (
    <div className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <ChangeAvatar />

      <Section>
        <SectionTitle>Informații personale</SectionTitle>
        <SectionDescription>Actualizează datele afișate în contul tău.</SectionDescription>
        <SectionContent>
          <UpdateProfileForm />
        </SectionContent>
      </Section>

      <Section variant="danger">
        <SectionTitle>Zona periculoasă</SectionTitle>
        <SectionDescription>Acțiuni ireversibile asupra contului.</SectionDescription>
        <SectionContent>
          <DeleteAccountForm />
        </SectionContent>
      </Section>
    </div>
  )
}
