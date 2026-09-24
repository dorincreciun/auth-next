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
        {isRequesting ? "Sending…" : "Send reset code"}
      </Button>

      <FieldDescription>
        We send a 6-digit code to <span className="text-foreground">{email}</span> and take you to
        the page where you choose a new password.
      </FieldDescription>
    </div>
  )
}
