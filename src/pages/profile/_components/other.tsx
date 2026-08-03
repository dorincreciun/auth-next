import {Section} from "@pages/profile/_components/section";
import {Field, FieldContent, FieldDescription, FieldLabel} from "@shared/ui/field";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

export const Other = () => {
    return (
        <>
            <Section
                title="Informații personale"
                description="Actualizează datele afișate în contul tău."
            >
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
                </div>
            </Section>

            <Section title="Despre tine" description="Locație, job title și o biografie scurtă.">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                        <FieldLabel htmlFor="location">Locație</FieldLabel>
                        <Input
                            id="location"
                            name="location"
                            defaultValue="București"
                            placeholder="Oraș / țară"
                        />
                        <FieldDescription>Orașul în care locuiești sau lucrezi.</FieldDescription>
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="jobTitle">Job title</FieldLabel>
                        <Input
                            id="jobTitle"
                            name="jobTitle"
                            defaultValue="Software Engineer"
                            placeholder="Rolul tău"
                        />
                        <FieldDescription>Rolul sau poziția ta profesională.</FieldDescription>
                    </Field>

                    <Field className="sm:col-span-2">
                        <FieldLabel htmlFor="bio">Biografie</FieldLabel>
                        <textarea
                            id="bio"
                            name="bio"
                            defaultValue="Scrie câteva rânduri despre tine..."
                            placeholder="Scrie câteva rânduri despre tine..."
                            className="min-h-28 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-3 focus-visible:ring-primary/25"
                        />
                        <FieldDescription>
                            O descriere scurtă pe care o vezi în profilul tău.
                        </FieldDescription>
                    </Field>
                </div>
            </Section>

            <div className="flex justify-end pt-2">
                <Button type="submit" disabled>
                    Salvează modificările
                </Button>
            </div>

            <Section
                title="Zona periculoasă"
                description="Acțiuni ireversibile asupra contului."
                variant="danger"
            >
                <Field
                    orientation="horizontal"
                    className="flex items-center justify-between gap-4 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3.5"
                >
                    <FieldContent>
                        <FieldLabel>Șterge contul</FieldLabel>
                        <FieldDescription>
                            Acțiune permanentă. Toate datele asociate contului vor fi eliminate.
                        </FieldDescription>
                    </FieldContent>
                    <Button type="button" variant="destructive" size="sm" className="shrink-0" disabled>
                        Șterge contul
                    </Button>
                </Field>
            </Section>
        </>
    );
};