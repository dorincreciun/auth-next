"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {useForm} from "@shared/lib/hooks";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {forgotPassword} from "../api/forgot-password";
import {FORGOT_PASSWORD_MESSAGES} from "../config/messages";
import {forgotPasswordSchema} from "./schema";
import type {ForgotPasswordRequest, ForgotPasswordResponse,} from "./types";

export const useForgotPasswordForm = () => {
    const router = useRouter();

    return useForm<ForgotPasswordRequest, ForgotPasswordResponse>({
        onSubmit: (values) => forgotPassword(values),
        onSuccess: (data, values) => {
            toast.success(data.message || FORGOT_PASSWORD_MESSAGES.SUCCESS);

            /* Daca am trimis cu success emailul de confirmare facem direct redirect la reset-password */
            const params = new URLSearchParams({
                email: values.email,
                expiresAt: data.tokenExpiresAt
            });

            router.replace(
                `${getRoutePath(APP_ROUTES.RESET_PASSWORD)}?${params.toString()}`,
            );
        },
        onError: (error) => toast.error(error.message),
        onUnexpectedError: () => toast.error(FORGOT_PASSWORD_MESSAGES.ERROR),
        formOptions: {
            mode: "onTouched",
            resolver: zodResolver(forgotPasswordSchema),
            defaultValues: {
                email: "",
            },
        },
    });
};
