import {client} from "@shared/api";
import type {
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../model/types";

export const resetPassword = async (
  values: ResetPasswordRequest,
): Promise<ResetPasswordResponse> => {
  const {data, error} = await client.POST("/auth/password/reset", {
    body: values,
  });

  if (error) {
    return error;
  }

  if (!data) {
    throw new Error("Empty reset-password response");
  }

  return data;
};
