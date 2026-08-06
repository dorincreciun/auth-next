import type {components, paths} from "./v1";

/**
 * Extrage tipul unei scheme (DTO) definite în `components.schemas`.
 *
 * @typeParam K - Numele schemei, exact cum apare în Swagger/OpenAPI.
 *
 * @example
 * ```ts
 * type User = GetSchema<"UserResponseDto">;
 * ```
 */
export type GetSchema<K extends keyof components["schemas"]> =
    components["schemas"][K];

/** Răspuns de eroare standard din API (`ErrorResponseDto`). */
export type ErrorResponse = GetSchema<"ErrorResponseDto">;

/**
 * Envelope de succes folosit de API (când schema OpenAPI nu e încă generată
 * pentru un endpoint, sau ca tip generic în hooks).
 */
export type SuccessResponse<TData = unknown> = {
  success: true;
  statusCode: number;
  meta: {
    path: string;
    timestamp: string;
  };
  data: TData;
};

/** Union succes | eroare pentru un payload de tip `TData`. */
export type ApiResult<TData = unknown> =
  | SuccessResponse<TData>
  | ErrorResponse;

/**
 * Union-ul tuturor obiectelor de răspuns (indiferent de status code)
 * definite pentru un endpoint și metodă date.
 *
 * Pas intermediar, folosit doar de {@link ApiResponse}.
 *
 * @typeParam Path - Calea endpoint-ului.
 * @typeParam Method - Metoda HTTP.
 */
type ResponseUnion<Path extends keyof paths, Method extends keyof paths[Path]> =
    paths[Path][Method] extends { responses: infer R } ? R[keyof R] : never;

/**
 * Extrage body-ul complet de răspuns (JSON) pentru un endpoint și metodă
 * date, ca union peste toate status code-urile (succes + eroare).
 *
 * @typeParam Path - Calea endpoint-ului, exact cum apare în `paths`.
 * @typeParam Method - Metoda HTTP (`"get"`, `"post"`, etc.), lowercase.
 *
 * @example
 * ```ts
 * type LoginResult = ApiResponse<"/auth/login", "post">;
 * ```
 */
export type ApiResponse<Path extends keyof paths, Method extends keyof paths[Path]> =
    ResponseUnion<Path, Method> extends { content: { "application/json": infer C }; } ? C : never;

/**
 * Extrage tipul body-ului de request pentru un endpoint și metodă date.
 * Suportă `application/json` și `multipart/form-data`.
 *
 * @typeParam Path - Calea endpoint-ului, exact cum apare în `paths`.
 * @typeParam Method - Metoda HTTP (`"post"`, `"patch"`, `"put"`, etc.).
 *
 * @example
 * ```ts
 * type LoginPayload = ApiRequestBody<"/auth/login", "post">;
 * type AvatarPayload = ApiRequestBody<"/users/upload/avatar", "post">;
 * ```
 */
export type ApiRequestBody<Path extends keyof paths, Method extends keyof paths[Path]> =
    paths[Path][Method] extends { requestBody: { content: infer C } }
      ? C extends { "application/json": infer B }
        ? B
        : C extends { "multipart/form-data": infer B }
          ? B
          : never
      : never;

/**
 * Extrage tipul parametrilor din path (ex. `{id}` din `/sessions/{id}`).
 *
 * @typeParam Path - Calea endpoint-ului care conține parametri dinamici.
 *
 * @example
 * ```ts
 * type SessionParams = ApiPathParams<"/sessions/{id}">;
 * ```
 */
export type ApiPathParams<Path extends keyof paths> =
    paths[Path] extends { parameters: { path: infer P } } ? P : never;

/**
 * Extrage tipul parametrilor de query pentru requestul GET al unui endpoint dat.
 *
 * @typeParam Path - Calea endpoint-ului cu metodă GET.
 *
 * @example
 * ```ts
 * type SessionsQuery = ApiQueryParams<"/sessions">;
 * ```
 */
export type ApiQueryParams<Path extends keyof paths> =
    paths[Path] extends { get: { parameters: { query?: infer Q } } } ? Q : never;

/**
 * Extrage valorile posibile ale unui enum expus în schema.
 *
 * @typeParam K - Numele schemei care reprezintă enum-ul.
 *
 * @example
 * ```ts
 * type SessionStatus = SchemaEnum<"SessionStatusEnum">;
 * ```
 */
export type SchemaEnum<K extends keyof components["schemas"]> =
    components["schemas"][K] extends string ? components["schemas"][K] : never;