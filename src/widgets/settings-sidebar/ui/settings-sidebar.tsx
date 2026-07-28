"use client"

import { BadgeCheck, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { UserAvatar } from "@entities/user"
import { LogoutButton } from "@features/auth/logout"
import { cn } from "@shared/lib/utils"

import { accountNavItems, settingsNavLinkVariants } from "../model/settings-nav"

export const SettingsSidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="bg-card/70 flex min-h-0 w-64 max-w-64 shrink-0 flex-col self-stretch rounded-none border-y border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl max-md:w-full max-md:max-w-none md:rounded-xl md:border">
      <header className="border-b border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="text-primary flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <Settings className="size-4" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
              Setări
            </p>
            <h1 className="text-foreground truncate text-base font-semibold tracking-tight">
              Contul meu
            </h1>
          </div>
        </div>
      </header>

      <nav aria-label="Setări cont" className="flex min-h-0 flex-1 flex-col p-3">
        <p className="text-muted-foreground mb-2.5 px-2.5 text-[10px] font-bold tracking-[0.18em] uppercase">
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

      <footer className="mt-auto flex flex-col gap-2 border-t border-white/10 p-3">
        <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5">
          <UserAvatar />
          <div className="min-w-0 flex-1">
            <p className="text-foreground truncate text-sm font-medium">Ion Popescu</p>
            <p className="text-muted-foreground truncate text-xs">ion.popescu@exemplu.com</p>
          </div>
          <span className="border-primary/30 bg-primary/10 text-primary inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold">
            <BadgeCheck className="size-3" aria-hidden />
            Activ
          </span>
        </div>

        <LogoutButton />
      </footer>
    </aside>
  )
}
