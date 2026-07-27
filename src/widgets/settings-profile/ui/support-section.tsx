import { Button } from "@shared/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"

export const SupportSection = () => {
    return (
        <div className="flex flex-col gap-3">
            <Field
                orientation="horizontal"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
            >
                <FieldContent>
                    <FieldLabel>Deconectare de pe toate dispozitivele</FieldLabel>
                    <FieldDescription>
                        Încheie toate sesiunile active, inclusiv cea curentă.
                    </FieldDescription>
                </FieldContent>
                <Button variant="outline" size="sm" className="shrink-0">
                    Deconectează
                </Button>
            </Field>

            <Field
                orientation="horizontal"
                className="flex items-center justify-between gap-4 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3.5"
            >
                <FieldContent>
                    <FieldLabel>Șterge contul</FieldLabel>
                    <FieldDescription>
                        Acțiune permanentă. Toate datele asociate contului vor fi eliminate.
                    </FieldDescription>
                </FieldContent>
                <Button variant="destructive" size="sm" className="shrink-0">
                    Șterge contul
                </Button>
            </Field>
        </div>
    )
}
