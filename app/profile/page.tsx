import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "Your account's public details.",
}

export { ProfilePage as default } from "@pages/profile"
