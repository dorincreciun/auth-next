"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getRoutePath } from "@shared/config/routing"
import { cn } from "@shared/lib/utils"

import { profileNavItems } from "../model/nav-items"
import { profileNavLinkVariants } from "../model/nav-link-variants"

export const ProfileNav = () => {
  const pathname = usePathname()

  return (
    <nav aria-label="Navigare profil" className="flex min-h-0 flex-1 flex-col p-3">
      <p className="text-muted-foreground mb-2.5 px-2.5 text-[10px] font-bold tracking-[0.18em] uppercase">
        Cont
      </p>
      <ul className="flex flex-col gap-1">
        {profileNavItems.map((item) => {
          const href = getRoutePath(item.route)
          const isActive = pathname === href
          const Icon = item.icon

          return (
            <li key={href}>
              <Link href={href} className={cn(profileNavLinkVariants({ active: isActive }))}>
                <Icon aria-hidden />
                <span>{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
