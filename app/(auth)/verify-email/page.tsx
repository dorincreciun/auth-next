import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verificare email",
  description: "Confirmă adresa de email a contului.",
}

export { VerifyEmailPage as default } from "@pages/verify-email"
