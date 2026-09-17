import { redirect } from "next/navigation"

import { getMe } from "@entities/user/server"
import { APP_ROUTES, getRoutePath } from "@shared/config"

import { EmailSection } from "./email-section"
import { PasswordSection } from "./password-section"
import { TwoFactorSection } from "./two-factor-section"

export const ProfileSecurityPage = async () => {
  const user = await getMe()

  if (!user) {
    redirect(getRoutePath(APP_ROUTES.LOGIN))
  }

  return (
    <div className="[&>section:not(:last-of-type)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-of-type)]:border-b [&>section:not(:last-of-type)]:pb-10">
      <EmailSection email={user.email} isVerified={user.isVerified} />

      <PasswordSection email={user.email} isVerified={user.isVerified} />

      <TwoFactorSection />
    </div>
  )
}
