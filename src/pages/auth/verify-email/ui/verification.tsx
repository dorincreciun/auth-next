import { VerifyEmailForm } from "@features/auth/verify-email"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const VerifyEmailPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Verificare email</CardTitle>
                <CardDescription>
                    Introdu codul de verificare trimis pe adresa ta de email.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <VerifyEmailForm />
            </CardContent>
        </Card>
    )
}
