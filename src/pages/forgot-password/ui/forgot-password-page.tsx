import { ForgotPasswordForm } from "@features/auth/forgot-password"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const ForgotPasswordPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reset password</CardTitle>
        <CardDescription>Enter the email address linked to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  )
}
