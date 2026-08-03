import "server-only";

import {server} from "@shared/api/server";
import type {User} from "../model/types";

/**
 * Profilul utilizatorului autentificat (doar pe server / RSC).
 * Pe client importă din `@entities/user` (UI/tipuri), nu de aici.
 */
export const getMe = async (): Promise<User | null> => {
  const api = await server();
  const {data, error} = await api.GET("/auth/me");

  if (error || !data?.success) {
    return null;
  }

  return data.data.user;
};
