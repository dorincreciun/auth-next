"use client";

import {useTransition} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {APP_ROUTES, getRoutePath} from "@shared/config/routing";
import {logout as logoutRequest} from "../api/logout";
import {LOGOUT_MESSAGES} from "../config/messages";

export const useLogout = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const logout = () => {
    if (isPending) {
      return;
    }

    startTransition(async () => {
      try {
        const response = await logoutRequest();

        if (response.success) {
          toast.success(LOGOUT_MESSAGES.SUCCESS);
          router.replace(getRoutePath(APP_ROUTES.LOGIN));
          return;
        }

        toast.error(response.message);
      } catch {
        toast.error(LOGOUT_MESSAGES.ERROR);
      }
    });
  };

  return {
    logout,
    isPending,
  };
};
