import * as React from "react"

import { cn } from "@shared/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "h-10 w-full min-w-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground transition-colors outline-none",
                "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
                "placeholder:text-muted-foreground",
                "focus-visible:border-primary/60 focus-visible:ring-3 focus-visible:ring-primary/25",
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
                className,
            )}
            {...props}
        />
    )
}

export { Input }
