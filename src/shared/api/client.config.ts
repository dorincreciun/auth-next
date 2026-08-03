import createClient from "openapi-fetch";
import type {paths} from "./v1";

export const client = createClient<paths>({
  baseUrl: "/api",
  credentials: "include",
});

client.use({
  onRequest({request}) {
    if (typeof window === "undefined") {
      throw new Error(
        "`client` din @shared/api este doar pentru browser. " +
          "Pe server folosește `server` din @shared/api/server.",
      );
    }
    return request;
  },
});
