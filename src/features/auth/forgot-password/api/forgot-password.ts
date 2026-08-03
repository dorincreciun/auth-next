import {client} from "@shared/api";
import type {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from "../model/types";

export const forgotPassword = async (
  values: ForgotPasswordRequest,
): Promise<ForgotPasswordResponse> => {
  const {data, error} = await client.POST("/auth/password/forgot", {
    body: values,
  });

  if (error) {
    return error;
  }

  if (!data) {
    throw new Error("Empty forgot-password response");
  }

  return data;
};
