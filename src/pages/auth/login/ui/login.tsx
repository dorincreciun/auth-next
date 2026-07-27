import { LoginForm } from "@features/auth/login"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const LoginPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Autentificare</CardTitle>
                <CardDescription>Introdu datele contului pentru a continua.</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}
