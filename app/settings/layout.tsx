import type { ReactNode } from "react"

import type { Metadata } from "next"

import { getMe } from "@entities/user/server"
import { Card, CardContent, CardFooter, CardHeader } from "@shared/ui/card"
import { Breadcrumb } from "@widgets/breadcrumb"
import { Footer } from "@widgets/footer"
import { SettingsSidebar } from "@widgets/settings-sidebar"

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

export default async function SettingsLayout({ children }: Props) {
  return (
    <main className="relative flex h-svh flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ea2845]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d31e5a]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 gap-4 overflow-hidden p-4">
        <SettingsSidebar />
        <Card className="flex min-h-0 w-full flex-1 flex-col gap-0 overflow-hidden py-0">
          <CardHeader className="shrink-0 border-b border-white/10 py-4">
            <Breadcrumb />
          </CardHeader>
          <CardContent className="min-h-0 flex-1 overflow-y-auto py-6">{children}</CardContent>
          <CardFooter className="mt-auto shrink-0 border-0 bg-transparent p-0">
            <Footer />
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
