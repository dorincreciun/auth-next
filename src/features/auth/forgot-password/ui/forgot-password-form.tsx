"use client";

import Link from "next/link";

import {APP_ROUTES, getRoutePath} from "@shared/config";
import {Button} from "@shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@shared/ui/field";
import {Input} from "@shared/ui/input";

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
            placeholder="name@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <FieldError errors={[errors.email]} />
          ) : (
            <FieldDescription>
              We will send a reset code to this address.
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
            {isSubmitting ? "Sending…" : "Send code"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            <Link
              href={getRoutePath(APP_ROUTES.LOGIN)}
              className="font-medium text-primary hover:underline"
            >
              Back to sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
