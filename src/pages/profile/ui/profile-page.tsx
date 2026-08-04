import { ChangeAvatar } from "@features/user/change-avatar"
import { DeleteAccountForm } from "@features/user/delete-account"
import { UpdateProfileForm } from "@features/user/update-profile"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const DefaultProfilePage = () => {
  return (
    <div className="[&>*:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-10">
      <ChangeAvatar />

      <UpdateProfileForm />

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
