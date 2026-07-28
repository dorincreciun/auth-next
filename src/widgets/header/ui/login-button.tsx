import { User } from "lucide-react"
import Link from "next/link"

import { APP_ROUTES } from "@shared/config"
import { Button } from "@shared/ui/button"

export const LoginButton = () => {
  return (
    <Button
      asChild
      size="lg"
      className="min-w-23 max-md:aspect-square max-md:size-9 max-md:min-w-0 max-md:px-0"
    >
      <Link href={APP_ROUTES.LOGIN} aria-label="Autentificare">
        <span className="inline-flex items-center gap-2">
          <User aria-hidden />
          <span className="max-md:hidden">Autentificare</span>
        </span>
      </Link>
    </Button>
  )
}
