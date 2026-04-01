import { createZodDto } from "nestjs-zod";
import validation from "../messages/validation.json";
import { z } from "zod";
const loginSchema = z.object({
  email: z
    .string()
    .min(1, validation["EMAIL.REQUIRED"])
    .prefault("")
    .pipe(z.email(validation["EMAIL.INVALID"] as string)),
  password: z.string().min(1, validation["PASSWORD.MIN"]).prefault(""),
});
export class LoginDto extends createZodDto(loginSchema) {}
