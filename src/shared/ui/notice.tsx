import type { ReactNode } from "react"

import { Info } from "lucide-react"

import { cn } from "@shared/lib/utils"

interface NoticeProps {
  className?: string
  children: ReactNode
}

export const Notice = ({ className, children }: NoticeProps) => {
  return (
    <p
      className={cn(
        "flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <Info className="mt-px size-3.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  )
}
