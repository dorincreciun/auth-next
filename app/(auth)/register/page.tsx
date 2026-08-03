import {RegisterForm} from "@features/auth/register";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@shared/ui/card";

export default function RegisterPage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Înregistrare</CardTitle>
        <CardDescription>Creează un cont nou pentru a continua.</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
