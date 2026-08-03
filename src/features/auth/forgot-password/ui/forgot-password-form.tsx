"use client";

import Link from "next/link";
import {Button} from "@shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@shared/ui/field";
import {Input} from "@shared/ui/input";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {useForgotPasswordForm} from "../model/use-forgot-password-form";

export const ForgotPasswordForm = () => {
  const {register, handleFormSubmit, formState} = useForgotPasswordForm();
  const {errors, isSubmitting} = formState;

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
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <FieldError errors={[errors.email]} />
          ) : (
            <FieldDescription>
              Îți vom trimite un cod de resetare pe această adresă.
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Se trimite…" : "Trimite codul"}
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
