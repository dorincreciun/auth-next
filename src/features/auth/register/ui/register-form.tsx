"use client";

import Link from "next/link";

import {APP_ROUTES, getRoutePath} from "@shared/config";
import {Button} from "@shared/ui/button";
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel} from "@shared/ui/field";
import {Input} from "@shared/ui/input";

import {useRegisterForm} from "../model/use-register-form";

export const RegisterForm = () => {
  const {register, handleFormSubmit, formState} = useRegisterForm();
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
            <FieldDescription>Use an address you can access.</FieldDescription>
          )}
        </Field>

        <Field data-invalid={!!errors.password}>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
          />
          {errors.password ? (
            <FieldError errors={[errors.password]} />
          ) : (
            <FieldDescription>
              At least 8 characters, upper and lower case, a digit, and a special character.
            </FieldDescription>
          )}
        </Field>

        {!!errors.root && (
          <Field data-invalid>
            <FieldError errors={[errors.root]} />
          </Field>
        )}

        <Field>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account…" : "Create account"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link
              href={getRoutePath(APP_ROUTES.LOGIN)}
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
