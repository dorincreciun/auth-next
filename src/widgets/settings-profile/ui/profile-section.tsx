import { Avatar, AvatarFallback } from "@shared/ui/avatar"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"

export const ProfileSection = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Avatar className="size-16 shrink-0 border border-white/10">
                    <AvatarFallback className="bg-[linear-gradient(135deg,#ee2943_0%,#d31e5a_100%)] text-lg font-semibold text-white">
                        IP
                    </AvatarFallback>
                </Avatar>

                <div className="flex min-w-0 flex-col gap-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                        <Button size="sm" variant="outline">
                            Schimbă imaginea
                        </Button>
                        <Button variant="secondary" size="sm">
                            Elimină imaginea
                        </Button>
                    </div>
                    <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                        Acceptăm fișiere PNG sau JPEG, de maximum 2 MB.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field>
                    <FieldLabel htmlFor="firstName">Prenume</FieldLabel>
                    <Input
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        defaultValue="Ion"
                        placeholder="Ion"
                    />
                    <FieldDescription>Numele afișat în contul tău.</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="lastName">Nume</FieldLabel>
                    <Input
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        defaultValue="Popescu"
                        placeholder="Popescu"
                    />
                    <FieldDescription>Numele de familie asociat contului.</FieldDescription>
                </Field>

                <Field className="sm:col-span-2">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        defaultValue="ion.popescu@exemplu.com"
                        placeholder="nume@exemplu.com"
                    />
                    <FieldDescription>
                        Adresa folosită pentru autentificare și notificări.
                    </FieldDescription>
                </Field>
            </div>

            <div className="flex justify-end pt-1">
                <Button size="default">Salvează modificările</Button>
            </div>
        </div>
    )
}
