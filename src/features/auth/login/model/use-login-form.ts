"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "@shared/lib/hooks";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {login} from "../api/login";
import {LOGIN_MESSAGES} from "../config/messages";
import {loginSchema} from "./schema";
import type {LoginRequest, LoginResponse} from "./types";

export const useLoginForm = () => {
  const router = useRouter();

  return useForm<LoginRequest, LoginResponse>({
    onSubmit: (values) => login(values),
    onSuccess: () => {
      toast.success(LOGIN_MESSAGES.SUCCESS);
      router.replace(getRoutePath(APP_ROUTES.PROFILE));
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(LOGIN_MESSAGES.ERROR),
    formOptions: {
      mode: "onTouched",
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    },
  });
};
