import { BadgeCheck, MailWarning } from "lucide-react"

import { cn } from "@shared/lib/utils"

type VerificationBadgeProps = {
  isVerified: boolean
  compact?: boolean
  className?: string
}

export const VerificationBadge = ({ isVerified, compact, className }: VerificationBadgeProps) => {
  const label = isVerified ? "Email confirmat" : "Email neconfirmat"
  const Icon = isVerified ? BadgeCheck : MailWarning

  return (
    <span
      title={compact ? label : undefined}
      aria-label={compact ? label : undefined}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border text-[10px] font-semibold",
        compact ? "size-5 justify-center" : "px-2 py-0.5",
        isVerified
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-amber-400/30 bg-amber-400/10 text-amber-300",
        className,
      )}
    >
      <Icon className="size-3" aria-hidden />
      {compact ? null : label}
    </span>
  )
}
