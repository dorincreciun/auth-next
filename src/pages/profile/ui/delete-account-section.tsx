import { Button } from "@shared/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const DeleteAccountSection = () => {
  return (
    <Section variant="danger">
      <SectionTitle>Zona periculoasă</SectionTitle>
      <SectionDescription>Acțiuni ireversibile asupra contului.</SectionDescription>
      <SectionContent>
        <div className="flex flex-col gap-3">
          <Field
            orientation="horizontal"
            className="border-destructive/20 bg-destructive/5 flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5"
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

          <Notice>
            Indisponibil momentan: API-ul nu expune un endpoint de ștergere a contului.
          </Notice>
        </div>
      </SectionContent>
    </Section>
  )
}
