"use client"

import { KeyRound } from "lucide-react"

import { Button } from "@shared/ui/button"
import { FieldDescription } from "@shared/ui/field"

import { useRequestPasswordReset } from "../model/use-request-password-reset"

type RequestPasswordResetProps = {
  email: string
  disabled?: boolean
}

export const RequestPasswordReset = ({ email, disabled }: RequestPasswordResetProps) => {
  const { request, isRequesting } = useRequestPasswordReset(email)

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        size="sm"
        className="max-w-max gap-1.5"
        onClick={request}
        disabled={disabled || isRequesting}
      >
        <KeyRound data-icon="inline-start" />
        {isRequesting ? "Se trimite…" : "Trimite cod de resetare"}
      </Button>

      <FieldDescription>
        Trimitem un cod de 6 cifre la <span className="text-foreground">{email}</span> și te ducem la
        pagina unde alegi parola nouă.
      </FieldDescription>
    </div>
  )
}
