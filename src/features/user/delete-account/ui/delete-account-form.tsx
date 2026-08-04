import { Button } from "@shared/ui/button"
import { Dialog, DialogTrigger } from "@shared/ui/dialog"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@shared/ui/field"

export const DeleteAccountForm = () => {
  return (
    <form>
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

        {/* Confirm dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant="destructive" size="sm" className="shrink-0" disabled>
              Șterge contul
            </Button>
          </DialogTrigger>
        </Dialog>
      </Field>
    </form>
  )
}
