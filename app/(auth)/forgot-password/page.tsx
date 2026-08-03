import { Card , CardHeader, CardTitle, CardDescription, CardContent} from "@shared/ui/card";
import {ForgotPasswordForm} from "@features/auth/forgot-password";

export default function ForgotPassword() {
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