import {client} from "@shared/api";
import type {RegisterRequest, RegisterResponse} from "../model/types";

export const register = async (
  values: RegisterRequest,
): Promise<RegisterResponse> => {
  const {data, error} = await client.POST("/auth/register", {body: values});

  if (error) {
    return error;
  }

  if (!data) {
    throw new Error("Empty register response");
  }

  return data;
};
