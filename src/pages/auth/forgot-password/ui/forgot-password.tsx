import { ForgotPasswordForm } from "@features/auth/forgot-password"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const ForgotPasswordPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Resetare parolă</CardTitle>
                <CardDescription>
                    Introdu adresa de email asociată contului tău.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ForgotPasswordForm />
            </CardContent>
        </Card>
    )
}
