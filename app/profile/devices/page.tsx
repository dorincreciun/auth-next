import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devices",
  description: "Active sessions and their locations.",
}

export { ProfileDevicesPage as default } from "@pages/profile-devices"
