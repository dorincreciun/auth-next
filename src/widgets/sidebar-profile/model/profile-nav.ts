import {cva} from "class-variance-authority";
import {User} from "lucide-react";

import {APP_ROUTES, type AppRoutes} from "@shared/config/routing";

export const profileNavLinkVariants = cva(
  [
    "flex min-h-11 w-full items-center gap-2.5 rounded-lg px-3 py-2.5",
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
        false:
          "text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground [&_svg]:text-muted-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const profileNavItems: {
  label: string;
  icon: typeof User;
  route: AppRoutes;
}[] = [{label: "Profil", icon: User, route: APP_ROUTES.PROFILE}];
