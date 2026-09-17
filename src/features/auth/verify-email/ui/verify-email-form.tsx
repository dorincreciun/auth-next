"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import Link from "next/link"
import { Controller } from "react-hook-form"

import { APP_ROUTES, getRoutePath } from "@shared/config"
import { useTokenCountdown } from "@shared/lib/hooks"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@shared/ui/field"
import { Input } from "@shared/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@shared/ui/input-otp"

import { useVerifyEmailForm } from "../model/use-verify-email-form"

type VerifyEmailFormProps = {
  email: string
}

export const VerifyEmailForm = ({ email }: VerifyEmailFormProps) => {
  const { control, handleFormSubmit, formState, expiresAt, isSending, resend } =
    useVerifyEmailForm()
  const { errors, isSubmitting } = formState
  const { formatted, isExpired } = useTokenCountdown(expiresAt)
  const isBusy = isSubmitting || isSending
  const canResend = !isSending && (isExpired || !expiresAt)

  return (
    <form
      onSubmit={handleFormSubmit}
      noValidate
      className="animate-in fade-in duration-300 motion-reduce:animate-none"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            readOnly
            autoComplete="email"
            className="text-muted-foreground read-only:bg-white/[0.03] read-only:focus-visible:border-white/10 read-only:focus-visible:ring-0"
          />
        </Field>

        <Field data-invalid={!!errors.token}>
          <div className="flex items-center justify-between gap-3">
            <FieldLabel htmlFor="token">Cod de verificare</FieldLabel>
            {isSending && !expiresAt ? (
              <span className="text-muted-foreground text-xs font-medium">Se trimite…</span>
            ) : formatted != null ? (
              <span
                className={
                  isExpired
                    ? "text-destructive text-xs font-medium tabular-nums"
                    : "text-muted-foreground text-xs font-medium tabular-nums"
                }
                aria-live="polite"
              >
                {isExpired ? "Expirat" : formatted}
              </span>
            ) : null}
          </div>

          <Controller
            name="token"
            control={control}
            render={({ field, fieldState }) => (
              <InputOTP
                maxLength={6}
                id="token"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                disabled={isBusy || isExpired}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                autoComplete="one-time-code"
                pushPasswordManagerStrategy="none"
                aria-invalid={fieldState.invalid}
              >
                <InputOTPGroup aria-invalid={fieldState.invalid}>
                  {[0, 1, 2].map((index) => (
                    <InputOTPSlot key={index} index={index} aria-invalid={fieldState.invalid} />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup aria-invalid={fieldState.invalid}>
                  {[3, 4, 5].map((index) => (
                    <InputOTPSlot key={index} index={index} aria-invalid={fieldState.invalid} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            )}
          />

          {errors.token ? (
            <FieldError errors={[errors.token]} />
          ) : (
            <FieldDescription>Introdu codul de 6 cifre primit pe email.</FieldDescription>
          )}
        </Field>

        {!!errors.root && (
          <Field data-invalid>
            <FieldError errors={[errors.root]} />
          </Field>
        )}

        <Field>
          <Button type="submit" size="lg" className="w-full" disabled={isBusy || isExpired}>
            {isSubmitting ? "Se confirmă…" : "Confirmă emailul"}
          </Button>
        </Field>

        <Field>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={resend}
            disabled={!canResend}
          >
            {isSending ? "Se trimite…" : "Retrimite codul"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            <Link
              href={getRoutePath(APP_ROUTES.PROFILE)}
              className="text-primary font-medium hover:underline"
            >
              Mai târziu
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
