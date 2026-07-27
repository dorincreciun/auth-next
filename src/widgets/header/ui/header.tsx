import Link from "next/link"

import { APP_ROUTES } from "@shared/config"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
                <Link href={APP_ROUTES.ROOT} className="text-sm font-semibold tracking-tight text-foreground">
                    Auth<span className="text-primary">Next</span>
                </Link>

                <nav className="flex items-center gap-2">
                    <Link
                        href={APP_ROUTES.PROFILE}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                        Setări
                    </Link>
                    <Link
                        href={APP_ROUTES.LOGIN}
                        className="rounded-full bg-[linear-gradient(135deg,#ee2943_0%,#d31e5a_100%)] px-3 py-1.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(234,40,69,0.35)]"
                    >
                        Autentificare
                    </Link>
                </nav>
            </div>
        </header>
    )
}
