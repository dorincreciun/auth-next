import {LoginForm} from "@features/auth/login";
import { Card , CardHeader, CardTitle, CardDescription, CardContent} from "@shared/ui/card";

export default function LoginPage() {
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