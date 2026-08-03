import type { ReactNode } from "react"

import { cn } from "@shared/lib/utils"

type Variant = "default" | "danger"

interface SectionProps {
  children: ReactNode
  variant?: Variant
}

export const Section = ({ children, variant = "default" }: SectionProps) => {
  return (
    <section data-variant={variant} className="group/section flex flex-col gap-6">
      {children}
    </section>
  )
}

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={cn(
        "text-foreground text-base font-semibold tracking-tight",
        "group-data-[variant=danger]/section:text-destructive",
      )}
    >
      {children}
    </h2>
  )
}

export const SectionDescription = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground mt-1 text-sm">{children}</p>
)

export const SectionContent = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
)
