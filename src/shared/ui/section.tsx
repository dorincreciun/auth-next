import type { ReactNode } from "react"

import { cn } from "@shared/lib/utils"

interface SectionProps {
  title: string
  description?: string
  variant?: "default" | "danger"
  children: ReactNode
}

export const Section = ({
  title,
  description,
  variant = "default",
  children,
}: SectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="border-b border-border pb-4">
        <h2
          className={cn(
            "text-base font-semibold tracking-tight text-foreground",
            variant === "danger" && "text-destructive",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">{children}</div>
    </section>
  )
}
