"use client"

import { MailCheck } from "lucide-react"
import Link from "next/link"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { useTokenCountdown } from "@shared/lib/hooks"
import { Button } from "@shared/ui/button"
import { FieldDescription } from "@shared/ui/field"

import { useSendVerifyEmail } from "../model/use-send-verify-email"

export const SendVerifyEmail = () => {
  const { expiresAt, isSending, send } = useSendVerifyEmail()
  const { formatted, isExpired } = useTokenCountdown(expiresAt)
  const hasActiveCode = expiresAt != null && !isExpired

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="button"
          size="sm"
          className="gap-1.5"
          onClick={send}
          disabled={isSending || hasActiveCode}
        >
          <MailCheck data-icon="inline-start" />
          {isSending ? "Se trimite…" : "Trimite codul de confirmare"}
        </Button>

        <Button asChild variant="outline" size="sm">
          <Link href={getRoutePath(APP_ROUTES.VERIFY_EMAIL)}>Introdu codul</Link>
        </Button>
      </div>

      <FieldDescription>
        {hasActiveCode
          ? `Codul trimis este valabil încă ${formatted}. Poți cere unul nou după ce expiră.`
          : "Primești pe email un cod de 6 cifre pe care îl confirmi în pagina de verificare."}
      </FieldDescription>
    </div>
  )
}
