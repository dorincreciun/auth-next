"use client"

import Link from "next/link"

import { APP_ROUTES } from "@shared/config"
import { Button } from "@shared/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@shared/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@shared/ui/input-otp"

const OTP_LENGTH = 6

export const VerifyEmailForm = () => {
    return (
        <form>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="token">Cod de verificare</FieldLabel>
                    <InputOTP id="token" name="token" maxLength={OTP_LENGTH} required>
                        <InputOTPGroup className="w-full justify-between gap-2">
                            {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                                <InputOTPSlot
                                    key={index}
                                    index={index}
                                    className="size-11 flex-1 rounded-xl border border-white/10 bg-white/5 text-base font-semibold first:rounded-xl first:border-l last:rounded-xl data-[active=true]:border-primary/60 data-[active=true]:ring-3 data-[active=true]:ring-primary/25"
                                />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                    <FieldDescription>Introdu codul de 6 cifre primit pe email.</FieldDescription>
                </Field>
                <Field>
                    <Button type="submit" size="lg" className="w-full">
                        Verifică emailul
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        Nu ai primit codul?{" "}
                        <button type="button" className="font-medium text-primary hover:underline">
                            Retrimite codul
                        </button>
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldDescription className="text-center">
                        <Link href={APP_ROUTES.LOGIN} className="font-medium text-primary hover:underline">
                            Înapoi la autentificare
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
