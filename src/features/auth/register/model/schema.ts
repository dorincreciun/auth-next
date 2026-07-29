import { z } from "zod"

const PASSWORD_MIN_LENGTH = 8

/** Aceleași reguli ca pe server, ca să evităm un 422 previzibil. */
const PASSWORD_COMPLEXITY = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])/

export const registerSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "Adresa de email este obligatorie")
      .pipe(z.email("Adresa de email nu este validă")),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, `Parola trebuie să aibă minim ${PASSWORD_MIN_LENGTH} caractere`)
      .regex(
        PASSWORD_COMPLEXITY,
        "Parola trebuie să conțină literă mică, literă mare, cifră și caracter special",
      ),
    confirmPassword: z.string().min(1, "Confirmarea parolei este obligatorie"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Parolele nu coincid",
    path: ["confirmPassword"],
  })

/** Valorile formularului: payload-ul API plus confirmarea, care nu se trimite la server. */
export type RegisterFormValues = z.infer<typeof registerSchema>
