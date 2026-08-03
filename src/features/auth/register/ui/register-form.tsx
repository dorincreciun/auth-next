"use client";

import Link from "next/link";
import {Button} from "@shared/ui/button";
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel} from "@shared/ui/field";
import {Input} from "@shared/ui/input";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
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
            placeholder="nume@exemplu.com"
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <FieldError errors={[errors.email]} />
          ) : (
            <FieldDescription>
              Vei primi un cod de verificare pe această adresă.
            </FieldDescription>
          )}
        </Field>

        <Field data-invalid={!!errors.password}>
          <FieldLabel htmlFor="password">Parolă</FieldLabel>
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
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Se creează contul…" : "Creează cont"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Ai deja cont?{" "}
            <Link
              href={getRoutePath(APP_ROUTES.LOGIN)}
              className="font-medium text-primary hover:underline"
            >
              Autentifică-te
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
