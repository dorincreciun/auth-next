import { UpdateSecurityForm } from "@features/user/update-security"
import { Notice } from "@shared/ui/notice"

export const SettingsSecurityPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul acoperă doar resetarea parolei prin email,
        nu și schimbarea parolei din cont, schimbarea adresei sau autentificarea în doi pași.
      </Notice>

      <UpdateSecurityForm />
    </div>
  )
}
