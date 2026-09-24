import { RegisterForm } from "@features/auth/register"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const RegisterPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>Create a new account to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}
