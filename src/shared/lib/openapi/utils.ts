import { type components } from "@shared/lib/openapi/v1"

export type GetSchema<K extends keyof components["schemas"]> = components["schemas"][K]
