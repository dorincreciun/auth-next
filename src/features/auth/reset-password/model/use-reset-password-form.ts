"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "@shared/lib/hooks";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {resetPassword} from "../api/reset-password";
import {RESET_PASSWORD_MESSAGES} from "../config/messages";
import {resetPasswordSchema} from "./schema";
import type {ResetPasswordRequest, ResetPasswordResponse} from "./types";

export const useResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email") ?? "";
  const expiresAt = searchParams?.get("expiresAt") ?? null;

  const form = useForm<ResetPasswordRequest, ResetPasswordResponse>({
    onSubmit: (values) => resetPassword(values),
    onSuccess: (data) => {
      toast.success(data.message || RESET_PASSWORD_MESSAGES.SUCCESS);
      router.replace(getRoutePath(APP_ROUTES.LOGIN));
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(RESET_PASSWORD_MESSAGES.ERROR),
    formOptions: {
      mode: "onTouched",
      resolver: zodResolver(resetPasswordSchema),
      defaultValues: {
        email,
        token: "",
        newPassword: "",
      },
    },
  });

  return {
    ...form,
    expiresAt,
  };
};
