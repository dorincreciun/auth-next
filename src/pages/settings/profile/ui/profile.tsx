import { ProfileSection } from "@widgets/settings-profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

export const SettingsProfilePage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Profil</CardTitle>
                <CardDescription>
                    Gestionează informațiile personale afișate în contul tău.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ProfileSection />
            </CardContent>
        </Card>
    )
}
