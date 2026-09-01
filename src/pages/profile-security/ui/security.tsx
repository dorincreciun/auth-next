import { redirect } from "next/navigation"

import { getMe } from "@entities/user/server"
import { UpdateSecurityForm } from "@features/user/update-security"
import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { Notice } from "@shared/ui/notice"

export const SettingsSecurityPage = async () => {
  const user = await getMe()

  if (!user) {
    redirect(getRoutePath(APP_ROUTES.LOGIN))
  }

  return (
    <div className="flex flex-col gap-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul acoperă doar resetarea parolei prin email,
        nu și schimbarea parolei din cont, schimbarea adresei sau autentificarea în doi pași.
      </Notice>

      <UpdateSecurityForm email={user.email} isVerified={user.isVerified} />
    </div>
  )
}
