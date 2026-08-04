import { redirect } from "next/navigation"

import { getMe } from "@entities/user/server"
import { ChangeAvatar } from "@features/user/change-avatar"
import { DeleteAccountForm } from "@features/user/delete-account"
import { UpdateProfileForm } from "@features/user/update-profile"
import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const DefaultProfilePage = async () => {
  const user = await getMe()

  if (!user) {
    redirect(getRoutePath(APP_ROUTES.LOGIN))
  }

  const profile = user.profile

  return (
    <div className="[&>*:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-10">
      <ChangeAvatar avatarUrl={profile?.avatarUrl} />

      <UpdateProfileForm profile={profile} />

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
