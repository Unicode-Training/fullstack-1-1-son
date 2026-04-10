import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { type RefreshTokenData } from "src/types/auth.type";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("/login")
  async login(@Body() dataLogin: LoginDto) {
    const token = await this.authService.login(dataLogin);
    return {
      success: true,
      data: token,
      message: "Đăng nhập thành công",
    };
  }
  @Post("/register")
  register(@Body() dataRegister: RegisterDto) {
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

  @Delete("/logout")
  @UseGuards(AuthGuard)
  logout(@Req() request: any) {
    //Lấy được token để gửi sang service thêm vào redis
    const jti = request.jti;
    const exp = request.exp;
    return this.authService.logout(jti as string, exp as number);
  }
  @Post("/forgot-password")
  async forgotPassword(@Body() { email }: { email: string }) {
    await this.authService.forgotPassword(email);
    return {
      success: true,
    };
  }
  @Post("/verify-otp")
  async verifyOtp(@Body() { otp }: { otp: string }) {
    await this.authService.verifyOtp(otp);
    return { success: true };
  }
  @Put("/reset-password")
  async resetPassword(
    @Body()
    body: {
      password: string;
      confirmPassword: string;
      otp: string;
    },
  ) {
    await this.authService.resetPassword(body);
    return {
      success: true,
      message: "Đặt lại mật khẩu thành công",
    };
  }
}

//Tính năng
// - Đăng ký tài khoản: POST /auth/register
// - Đăng nhập: POST /auth/login
// - Profile: GET /auth/profile --> protected route

// Chuẩn bị
// - bcrypt
// - jsonwebtoken
