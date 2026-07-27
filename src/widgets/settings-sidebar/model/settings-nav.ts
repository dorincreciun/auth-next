import { cva } from "class-variance-authority"
import { MonitorSmartphone, Shield, User } from "lucide-react"

import { APP_ROUTES, type AppRoutes } from "@shared/config"

export const settingsNavLinkVariants = cva(
    [
        "flex min-h-11 w-full items-center gap-2.5 rounded-xl px-3 py-2.5",
        "text-sm font-medium text-foreground no-underline",
        "border border-transparent",
        "transition-all outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "[&_svg]:size-4 [&_svg]:shrink-0",
    ],
    {
        variants: {
            active: {
                true: "border-primary/30 bg-primary/10 text-foreground shadow-[0_0_24px_rgba(234,40,69,0.15)] [&_svg]:text-primary",
                false: "text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground [&_svg]:text-muted-foreground",
            },
        },
        defaultVariants: {
            active: false,
        },
    },
)

export const accountNavItems: {
    label: string
    icon: typeof User
    href: AppRoutes
}[] = [
    { label: "Profil", icon: User, href: APP_ROUTES.PROFILE },
    { label: "Securitate", icon: Shield, href: APP_ROUTES.SECURITY },
    { label: "Dispozitive", icon: MonitorSmartphone, href: APP_ROUTES.DEVICES },
]
