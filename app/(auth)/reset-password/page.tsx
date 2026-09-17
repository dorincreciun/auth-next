import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parolă nouă",
  description: "Confirmă codul primit pe email și alege o parolă nouă.",
}

export { ResetPasswordPage as default } from "@pages/reset-password"
