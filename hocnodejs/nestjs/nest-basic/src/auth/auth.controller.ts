import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { type RefreshTokenData } from "src/types/auth.type";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { type Response } from "express";
import axios from "axios";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }
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
  @Get('google')
  googleRedirect(@Res() res: Response) {
    //Tạo url redirect để chuyển sang google

    const query = {
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: process.env.GOOGLE_CALLBACK_URL,
      response_type: 'code',
      scope: 'profile email',
      access_type: 'offline'
    }
    const url = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(query as any).toString()}`;
    return res.redirect(url);
  }
  @Get('google/callback')
  googleCallback(@Query() query: any, @Res() res: any) {
    const code = query.code;
    //Redirect về frontend kèm theo code qua url
    return res.redirect(`http://127.0.0.1:1234/home/login_google.html?code=${code}`)

  }

  @Post('google-login')
  async googleLogin(@Body() { code }) {
    const responseToken = await axios.post(`https://oauth2.googleapis.com/token`, {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_CALLBACK_URL,
      grant_type: 'authorization_code'
    });
    const { access_token } = responseToken.data;
    try {
      const responseUser = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });

      const googleUser = responseUser.data;
      console.log(googleUser);
      return { accessToken: '123' }

    } catch (error) {
      return error;
    }
  }
}
//Tính năng
// - Đăng ký tài khoản: POST /auth/register
// - Đăng nhập: POST /auth/login
// - Profile: GET /auth/profile --> protected route

// Chuẩn bị
// - bcrypt
// - jsonwebtoken
