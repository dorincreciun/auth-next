import { Settings } from "lucide-react"

import { type User, UserAvatar } from "@entities/user"
import { LogoutButton } from "@features/auth/logout"

import { ProfileNav } from "./profile-nav"

type ProfileSidebarProps = {
  user: User
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  return (
    <>
      <div className="bg-card/70 shrink-0 rounded-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
        <header className="flex items-center gap-3 p-3">
          <UserAvatar src={user.profile?.avatarUrl} />
          <div className="min-w-0 flex-1">
            <h1 className="text-foreground truncate text-sm font-semibold tracking-tight">
              {user.email}
            </h1>
            <p className="text-muted-foreground truncate text-xs">Account settings</p>
          </div>
          <LogoutButton className="h-8 w-auto shrink-0 px-2.5" />
        </header>
        <ProfileNav layout="tabs" />
      </div>

      <aside className="bg-card/70 hidden min-h-0 w-64 max-w-64 shrink-0 flex-col self-stretch rounded-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex">
        <header className="border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="text-primary flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Settings className="size-4" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
                Settings
              </p>
              <h1 className="text-foreground truncate text-base font-semibold tracking-tight">
                My account
              </h1>
            </div>
          </div>
        </header>

        <ProfileNav />

        <footer className="mt-auto flex flex-col gap-3 border-t border-white/10 p-3">
          <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5">
            <UserAvatar src={user.profile?.avatarUrl} />
            <div className="min-w-0 flex-1">
              <p className="text-foreground truncate text-sm font-medium">{user.email}</p>
            </div>
          </div>

          <LogoutButton />
        </footer>
      </aside>
    </>
  )
}
