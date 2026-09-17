import { redirect } from "next/navigation"

import { getMe } from "@entities/user/server"
import { ChangeAvatar } from "@features/user/change-avatar"
import { UpdateProfileForm } from "@features/user/update-profile"
import { APP_ROUTES, getRoutePath } from "@shared/config"

import { DeleteAccountSection } from "./delete-account-section"

export const ProfilePage = async () => {
  const user = await getMe()

  if (!user) {
    redirect(getRoutePath(APP_ROUTES.LOGIN))
  }

  const profile = user.profile

  return (
    <div className="[&>*:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:pb-10">
      <ChangeAvatar avatarUrl={profile?.avatarUrl} isVerified={user.isVerified} />

      <UpdateProfileForm profile={profile} isVerified={user.isVerified} />

      <DeleteAccountSection />
    </div>
  )
}
