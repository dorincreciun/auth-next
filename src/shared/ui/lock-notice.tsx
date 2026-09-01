import type { ReactNode } from "react"

import { Lock } from "lucide-react"

import { cn } from "@shared/lib/utils"

interface LockNoticeProps {
  className?: string
  children: ReactNode
}

export const LockNotice = ({ className, children }: LockNoticeProps) => {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-lg border border-amber-400/25 bg-amber-400/[0.06] px-3 py-2 text-xs leading-relaxed text-amber-200",
        className,
      )}
    >
      <Lock className="mt-px size-3.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  )
}
