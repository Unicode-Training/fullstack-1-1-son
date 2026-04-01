import { createZodDto } from "nestjs-zod";
import { z } from "zod";
const registerSchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  email: z
    .string()
    .min(1, "Email không được để trống")
    .pipe(z.email("Email không đúng định dạng")),
  password: z.string().min(1, "Mật khẩu phải từ 6 ký tự"),
});
export class RegisterDto extends createZodDto(registerSchema) {}
