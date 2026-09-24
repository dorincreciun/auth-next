import { Button } from "@shared/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"
import { Notice } from "@shared/ui/notice"
import { Section, SectionContent, SectionDescription, SectionTitle } from "@shared/ui/section"

export const DeleteAccountSection = () => {
  return (
    <Section variant="danger">
      <SectionTitle>Danger zone</SectionTitle>
      <SectionDescription>Irreversible actions on the account.</SectionDescription>
      <SectionContent>
        <div className="flex flex-col gap-3">
          <Field
            orientation="horizontal"
            className="border-destructive/20 bg-destructive/5 flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5"
          >
            <FieldContent>
              <FieldLabel>Delete account</FieldLabel>
              <FieldDescription>
                Permanent action. All data linked to the account will be removed.
              </FieldDescription>
            </FieldContent>

            <Button type="button" variant="destructive" size="sm" className="shrink-0" disabled>
              Delete account
            </Button>
          </Field>

          <Notice>
            Unavailable for now: the API does not expose an account deletion endpoint.
          </Notice>
        </div>
      </SectionContent>
    </Section>
  )
}
