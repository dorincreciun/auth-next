import { AlertCircle } from "lucide-react"
import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"
import { FieldDescription } from "@shared/ui/field"

export const ResetPasswordInvalidToken = () => {
  return (
    <Card className="w-full">
      <CardHeader className="gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <AlertCircle className="size-4" aria-hidden />
        </div>
        <CardTitle>Link expirat</CardTitle>
        <CardDescription>
          Codul de resetare este invalid sau a expirat. Solicită un cod nou.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button asChild size="lg" className="w-full">
          <Link href={getRoutePath(APP_ROUTES.FORGOT_PASSWORD)}>Solicită cod nou</Link>
        </Button>
        <FieldDescription className="text-center">
          <Link
            href={getRoutePath(APP_ROUTES.LOGIN)}
            className="font-medium text-primary hover:underline"
          >
            Înapoi la autentificare
          </Link>
        </FieldDescription>
      </CardContent>
    </Card>
  )
}
