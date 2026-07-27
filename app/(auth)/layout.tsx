import type { ReactNode } from "react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Auth",
    default: "Auth",
  },
  description: "Auth template",
}

interface Props {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative flex flex-1 items-center justify-center px-4 py-8 sm:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ea2845]/20 blur-3xl" />
      </div>
      <div className="relative w-full max-w-md">{children}</div>
    </main>
  )
}
