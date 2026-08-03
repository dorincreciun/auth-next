import { type ReactNode } from "react"

import "@app/styles/index.css"

import { type Metadata } from "next"

import { inter } from "@app/fonts"
import { Toaster } from "@shared/ui/sonner"

export const metadata: Metadata = {
  title: {
    template: "%s | Template",
    default: "Dorin",
  },
  description: "Next js template",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-svh flex-col">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
