/**
 * Public API-ul de server al entității user.
 *
 * Separat de `index.ts` pentru că exporturile de aici trag `next/headers`
 * (server-only) și ar rupe componentele client care importă `@entities/user`
 * pentru UI sau tipuri.
 */
export * from "./api/get-me"
