import type { ReactNode } from "react"

import type { Metadata } from "next"

import { SettingsShell } from "@widgets/settings-sidebar"

export const metadata: Metadata = {
  title: {
    template: "%s | Setări",
    default: "Setări",
  },
  description: "Gestionează setările contului tău.",
}

interface Props {
  children: ReactNode
}

export default function SettingsLayout({ children }: Props) {
  return (
    <main className="relative flex min-h-0 flex-1">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ea2845]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d31e5a]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full min-h-0 w-full max-w-[1920px] flex-1">
        <SettingsShell>{children}</SettingsShell>
      </div>
    </main>
  )
}
