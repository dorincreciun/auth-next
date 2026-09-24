"use client";

import Link from "next/link";

import {APP_ROUTES, getRoutePath} from "@shared/config";
import {Button} from "@shared/ui/button";
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel} from "@shared/ui/field";
import {Input} from "@shared/ui/input";

import {useLoginForm} from "../model/use-login-form";

export const LoginForm = () => {
  const {register, handleFormSubmit, formState} = useLoginForm();
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
          <FieldError errors={[errors.email]} />
        </Field>

        <Field data-invalid={!!errors.password}>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              href={getRoutePath(APP_ROUTES.FORGOT_PASSWORD)}
              className="ml-auto inline-block text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
          />
          <FieldError errors={[errors.password]} />
        </Field>

        {!!errors.root && (
          <Field data-invalid>
            <FieldError errors={[errors.root]} />
          </Field>
        )}

        <Field>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing in…" : "Sign in"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Don't have an account?{" "}
            <Link
              href={getRoutePath(APP_ROUTES.REGISTER)}
              className="font-medium text-primary hover:underline"
            >
              Create an account
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
