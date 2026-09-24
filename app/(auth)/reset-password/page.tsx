import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New password",
  description: "Confirm the code from the email and choose a new password.",
}

export { ResetPasswordPage as default } from "@pages/reset-password"
