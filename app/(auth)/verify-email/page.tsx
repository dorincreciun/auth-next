import { redirect } from "next/navigation"

import { getMe } from "@entities/user/server"
import { VerifyEmailForm } from "@features/auth/verify-email"
import { APP_ROUTES, getRoutePath } from "@shared/config/routing"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export default async function VerifyEmailPage() {
  const user = await getMe()

  if (!user) {
    redirect(getRoutePath(APP_ROUTES.LOGIN))
  }

  if (user.isVerified) {
    redirect(getRoutePath(APP_ROUTES.PROFILE))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Verifică emailul</CardTitle>
        <CardDescription>
          Introdu codul de 6 cifre trimis la {user.email} ca să confirmi adresa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <VerifyEmailForm email={user.email} />
      </CardContent>
    </Card>
  )
}
