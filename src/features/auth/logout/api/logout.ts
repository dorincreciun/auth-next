import {client} from "@shared/api";
import type {LogoutResponse} from "../model/types";

export const logout = async (): Promise<LogoutResponse> => {
  const {data, error} = await client.POST("/auth/logout");

  if (error) {
    return error;
  }

  if (!data) {
    throw new Error("Empty logout response");
  }

  return data;
};
