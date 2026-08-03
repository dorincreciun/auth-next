import {Suspense} from "react";
import {ResetPasswordForm} from "@features/auth/reset-password";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared/ui/card";

export default function ResetPasswordPage() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Parolă nouă</CardTitle>
        <CardDescription>
          Introdu codul primit pe email și alege o parolă nouă.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={null}>
          <ResetPasswordForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
