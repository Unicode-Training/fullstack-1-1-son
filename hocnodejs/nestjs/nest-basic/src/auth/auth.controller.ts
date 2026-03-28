import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  type RefreshTokenData,
  type LoginData,
  type RegisterData,
} from "src/types/auth.type";
import { AuthGuard } from "src/guards/auth/auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("/login")
  login(@Body() dataLogin: LoginData) {
    return this.authService.login(dataLogin);
  }
  @Post("/register")
  register(@Body() dataRegister: RegisterData) {
    return this.authService.register(dataRegister);
  }
  @Post("/refresh-token")
  refreshToken(@Body() { refreshToken }: RefreshTokenData) {
    return this.authService.refreshToken(refreshToken);
  }
  @Get("/profile")
  @UseGuards(AuthGuard)
  profile(@Req() a: any) {
    //Kiểm tra
    return a.user;
  }
}

//Tính năng
// - Đăng ký tài khoản: POST /auth/register
// - Đăng nhập: POST /auth/login
// - Profile: GET /auth/profile --> protected route

// Chuẩn bị
// - bcrypt
// - jsonwebtoken
