import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reset password",
  description: "Request a password reset code by email.",
}

export { ForgotPasswordPage as default } from "@pages/forgot-password"
