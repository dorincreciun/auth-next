import { type ReactNode } from "react"

import { Footer } from "@widgets/footer"
import { Header } from "@widgets/header"

interface RootLayoutProps {
    children: ReactNode
}

export function RootLayoutShell({ children }: RootLayoutProps) {
    return (
        <div className="flex min-h-svh flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
