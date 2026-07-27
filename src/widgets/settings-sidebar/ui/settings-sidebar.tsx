"use client"

import { BadgeCheck, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@shared/lib/utils"
import {
    accountNavItems,
    settingsNavLinkVariants,
} from "@widgets/settings-sidebar/model/settings-nav"

export const SettingsSidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="flex h-full min-h-0 w-64 max-w-64 shrink-0 flex-col rounded-none border-y border-white/10 bg-card/70 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl max-md:w-full max-md:max-w-none md:rounded-2xl md:border md:border-y-0">
            <header className="border-b border-white/10 p-4">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                        <Settings className="size-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                            Setări
                        </p>
                        <h1 className="truncate text-base font-semibold tracking-tight text-foreground">
                            Contul meu
                        </h1>
                    </div>
                </div>
            </header>

            <nav aria-label="Setări cont" className="flex min-h-0 flex-1 flex-col p-3">
                <p className="mb-2.5 px-2.5 text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    Cont
                </p>
                <ul className="flex flex-col gap-1">
                    {accountNavItems.map((item) => {
                        const isActive = pathname === item.href

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(settingsNavLinkVariants({ active: isActive }))}
                                >
                                    <item.icon aria-hidden />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <footer className="mt-auto border-t border-white/10 p-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ee2943_0%,#d31e5a_100%)] text-xs font-semibold text-white">
                        IP
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">Ion Popescu</p>
                        <p className="truncate text-xs text-muted-foreground">
                            ion.popescu@exemplu.com
                        </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        <BadgeCheck className="size-3" aria-hidden />
                        Activ
                    </span>
                </div>
            </footer>
        </aside>
    )
}
