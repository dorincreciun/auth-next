import { ResetPasswordForm } from "@features/auth/reset-password"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const ResetPasswordPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Parolă nouă</CardTitle>
                <CardDescription>
                    Introdu codul primit pe email și alege o parolă nouă.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResetPasswordForm />
            </CardContent>
        </Card>
    )
}
