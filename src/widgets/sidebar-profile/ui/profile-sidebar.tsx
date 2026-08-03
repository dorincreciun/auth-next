"use client"

import { Settings } from "lucide-react"

import { type User, UserAvatar } from "@entities/user"
import { LogoutButton } from "@features/auth/logout"

import { ActiveProfileBadge } from "./active-profile-badge"
import { ProfileNav } from "./profile-nav"

type ProfileSidebarProps = {
  user: User
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
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

      <ProfileNav />

      <footer className="mt-auto flex flex-col gap-3 border-t border-white/10 p-3">
        <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5">
          <UserAvatar />
          <div className="min-w-0 flex-1">
            <p className="text-foreground truncate text-sm font-medium">{user.email}</p>
          </div>
          {user.isVerified ? <ActiveProfileBadge /> : null}
        </div>

        <LogoutButton />
      </footer>
    </aside>
  )
}
