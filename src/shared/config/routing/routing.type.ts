/**
 * Tipurile de acces posibile pentru o ruta:
 * - "public"     -> accesibila oricui, indiferent daca are sesiune sau nu
 * - "private"    -> necesita sesiune activa
 * - "guest-only" -> accesibila DOAR daca NU exista sesiune activa
 */
export type RouteAccess = 'public' | 'private' | 'guest-only';

export interface RouteOptions {
    path: `/${string}`;
    access: RouteAccess;
}