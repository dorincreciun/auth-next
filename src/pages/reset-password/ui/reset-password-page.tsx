import { Suspense } from "react"

import { ResetPasswordForm } from "@features/auth/reset-password"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const ResetPasswordPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>New password</CardTitle>
        <CardDescription>Enter the code from the email and choose a new password.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* useSearchParams din formular cere o graniță de Suspense */}
        <Suspense fallback={null}>
          <ResetPasswordForm />
        </Suspense>
      </CardContent>
    </Card>
  )
}
