import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resetare parolă",
  description: "Solicită un cod de resetare a parolei pe email.",
}

export { ForgotPasswordPage as default } from "@pages/forgot-password"
