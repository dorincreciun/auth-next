"use client";

import Link from "next/link";
import {useEffect} from "react";
import {Controller} from "react-hook-form";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {REGEXP_ONLY_DIGITS} from "input-otp";
import {Button} from "@shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@shared/ui/field";
import {Input} from "@shared/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@shared/ui/input-otp";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {useTokenCountdown} from "@shared/hooks";
import {useResetPasswordForm} from "../model/use-reset-password-form";
import {RESET_PASSWORD_MESSAGES} from "../config/messages";

export const ResetPasswordForm = () => {
  const router = useRouter();
  const {register, control, handleFormSubmit, formState, expiresAt} =
    useResetPasswordForm();
  const {errors, isSubmitting} = formState;
  const {formatted, isExpired} = useTokenCountdown(expiresAt);

  useEffect(() => {
    if (!isExpired) {
      return;
    }

    toast.error(RESET_PASSWORD_MESSAGES.EXPIRED);
    router.replace(getRoutePath(APP_ROUTES.FORGOT_PASSWORD));
  }, [isExpired, router]);

  return (
    <form
      onSubmit={handleFormSubmit}
      noValidate
      className="animate-in fade-in duration-300 motion-reduce:animate-none"
    >
      <FieldGroup>
        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="nume@exemplu.com"
            readOnly
            aria-invalid={!!errors.email}
            className="text-muted-foreground read-only:bg-white/[0.03] read-only:focus-visible:border-white/10 read-only:focus-visible:ring-0"
          />
          <FieldError errors={[errors.email]} />
        </Field>

        <Field data-invalid={!!errors.token}>
          <div className="flex items-center justify-between gap-3">
            <FieldLabel htmlFor="token">Cod de verificare</FieldLabel>
            {formatted != null && (
              <span
                className={
                  isExpired
                    ? "text-xs font-medium tabular-nums text-destructive"
                    : "text-xs font-medium tabular-nums text-muted-foreground"
                }
                aria-live="polite"
              >
                {isExpired ? "Expirat" : formatted}
              </span>
            )}
          </div>

          <Controller
            name="token"
            control={control}
            render={({field, fieldState}) => (
              <InputOTP
                maxLength={6}
                id="token"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                disabled={isSubmitting || isExpired}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                autoComplete="one-time-code"
                pushPasswordManagerStrategy="none"
                aria-invalid={fieldState.invalid}
              >
                <InputOTPGroup aria-invalid={fieldState.invalid}>
                  {[0, 1, 2].map((index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      aria-invalid={fieldState.invalid}
                    />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup aria-invalid={fieldState.invalid}>
                  {[3, 4, 5].map((index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      aria-invalid={fieldState.invalid}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            )}
          />

          {errors.token ? (
            <FieldError errors={[errors.token]} />
          ) : (
            <FieldDescription>
              Introdu codul de 6 cifre primit pe email.
            </FieldDescription>
          )}
        </Field>

        <Field data-invalid={!!errors.newPassword}>
          <FieldLabel htmlFor="newPassword">Parolă nouă</FieldLabel>
          <Input
            {...register("newPassword")}
            id="newPassword"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!errors.newPassword}
            disabled={isExpired}
          />
          {errors.newPassword ? (
            <FieldError errors={[errors.newPassword]} />
          ) : (
            <FieldDescription>
              Minim 8 caractere, litere mari/mici, cifră și caracter special.
            </FieldDescription>
          )}
        </Field>

        {!!errors.root && (
          <Field data-invalid>
            <FieldError errors={[errors.root]} />
          </Field>
        )}

        <Field>
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || isExpired}
          >
            {isSubmitting ? "Se resetează…" : "Resetează parola"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            <Link
              href={getRoutePath(APP_ROUTES.LOGIN)}
              className="font-medium text-primary hover:underline"
            >
              Înapoi la autentificare
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
