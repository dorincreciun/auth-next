import { LoginForm } from "@features/auth/login"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const LoginPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your account details to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
