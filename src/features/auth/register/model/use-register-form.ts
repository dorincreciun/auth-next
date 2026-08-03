"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "@shared/lib/hooks";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {register} from "../api/register";
import {REGISTER_MESSAGES} from "../config/messages";
import {registerSchema} from "./schema";
import type {RegisterRequest, RegisterResponse} from "./types";

export const useRegisterForm = () => {
  const router = useRouter();

  return useForm<RegisterRequest, RegisterResponse>({
    onSubmit: (values) => register(values),
    onSuccess: () => {
      toast.success(REGISTER_MESSAGES.SUCCESS);
      router.replace(getRoutePath(APP_ROUTES.PROFILE));
    },
    onError: (error) => toast.error(error.message),
    onUnexpectedError: () => toast.error(REGISTER_MESSAGES.ERROR),
    formOptions: {
      mode: "onTouched",
      resolver: zodResolver(registerSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    },
  });
};
