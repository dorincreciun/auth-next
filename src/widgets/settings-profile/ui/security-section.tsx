import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"
import { Switch } from "@shared/ui/switch"

export const SecuritySection = () => {
    return (
        <div className="flex flex-col gap-5">
            <Field>
                <FieldLabel htmlFor="current-password">Parola curentă</FieldLabel>
                <Input
                    id="current-password"
                    name="currentPassword"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                />
                <FieldDescription>Introdu parola actuală pentru confirmare.</FieldDescription>
            </Field>

            <Field>
                <FieldLabel htmlFor="new-password">Parolă nouă</FieldLabel>
                <Input
                    id="new-password"
                    name="newPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                />
                <FieldDescription>Minim 8 caractere, cu litere și cifre.</FieldDescription>
            </Field>

            <Field
                orientation="horizontal"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
            >
                <FieldContent>
                    <FieldLabel htmlFor="two-factor">Autentificare în doi pași</FieldLabel>
                    <FieldDescription>
                        Adaugă un cod suplimentar la autentificare pentru protecție sporită.
                    </FieldDescription>
                </FieldContent>
                <Switch id="two-factor" className="shrink-0" />
            </Field>
        </div>
    )
}
