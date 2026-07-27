import { SecuritySection } from "@widgets/settings-profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const SettingsSecurityPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Securitate</CardTitle>
                <CardDescription>
                    Actualizează parola și verifică opțiunile de protecție ale contului.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SecuritySection />
            </CardContent>
        </Card>
    )
}
