import {client} from "@shared/api";
import type {LoginRequest, LoginResponse} from "../model/types";

export const login = async (values: LoginRequest): Promise<LoginResponse> => {
  const {data, error} = await client.POST("/auth/login", {body: values});

  if (error) {
    return error;
  }

  if (!data) {
    throw new Error("Empty login response");
  }

  return data;
};
