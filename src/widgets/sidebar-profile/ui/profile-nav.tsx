"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getRoutePath } from "@shared/config"
import { cn } from "@shared/lib/utils"

import { profileNavItems } from "../model/nav-items"
import { profileNavLinkVariants } from "../model/nav-link-variants"

type ProfileNavProps = {
  layout?: "sidebar" | "tabs"
}

export const ProfileNav = ({ layout = "sidebar" }: ProfileNavProps) => {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Account"
      className={cn(
        layout === "sidebar" && "flex min-h-0 flex-1 flex-col p-3",
        layout === "tabs" && "px-2 pb-2",
      )}
    >
      {layout === "sidebar" ? (
        <p className="text-muted-foreground mb-2.5 px-2.5 text-[10px] font-bold tracking-[0.18em] uppercase">
          Account
        </p>
      ) : null}
      <ul
        className={cn(
          "flex gap-1",
          layout === "sidebar" ? "flex-col" : "grid w-full grid-cols-3",
        )}
      >
        {profileNavItems.map((item) => {
          const href = getRoutePath(item.route)
          const isActive = pathname === href
          const Icon = item.icon

          return (
            <li key={href} className={layout === "tabs" ? "min-w-0" : undefined}>
              <Link
                href={href}
                className={cn(
                  profileNavLinkVariants({ active: isActive }),
                  layout === "tabs" &&
                    "h-auto min-h-14 flex-col justify-center gap-1 px-1 py-2 text-center text-xs",
                )}
              >
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
