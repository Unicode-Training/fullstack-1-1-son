import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { LoginData, RegisterData } from "src/types/auth.type";
import { hashPassword, verifyPassword } from "src/utils/hashing";
import { JwtService } from "@nestjs/jwt";
import { redisClient } from "../utils/redis";
import { Queue } from "bullmq";
import { InjectQueue } from "@nestjs/bullmq";
import crypto from "crypto";
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    @InjectQueue("EMAIL") private emailQueue: Queue,
  ) {}
  async login({ email, password }: LoginData) {
    //1. Kiểm tra email có tồn tại hay không?
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException("Email or password invalid");
    }
    //2. Verify password
    const passwordHash = user.password as string;

    if (passwordHash && !verifyPassword(password, passwordHash)) {
      throw new UnauthorizedException("Email or password invalid");
    }
    //3. Cấp phát token
    const payload = {
      id: user.id,
      jti: crypto.randomUUID(),
    };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRED as unknown as number,
    });
    //Gửi email --> add job vào hàng đợi
    await this.emailQueue.add("login-notice", {
      email: user.email,
      name: user.name,
      link: "http://unicode.vn/reset-password",
      randomId: Math.random(),
    });

    return { accessToken, refreshToken };
  }
  async register(dataRegister: RegisterData) {
    try {
      const data = await this.prismaService.user.create({
        data: {
          ...dataRegister,
          password: hashPassword(dataRegister.password),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        const err = error as any;
        if (err.code === "P2002") {
          throw new BadRequestException("Email đã bị trùng");
        }
      }
    }
  }
  async profile(token: string) {
    try {
      const { id, jti, exp } = await this.jwtService.verifyAsync(token);
      //Check blacklist
      const blacklist = await redisClient.get(`blacklist:${jti}`);
      if (blacklist) {
        return false;
      }
      const user = await this.prismaService.user.findUnique({
        where: { id },
      });
      return { user, jti, exp };
    } catch {
      return false;
    }
  }
  async refreshToken(refreshToken: string) {
    //Kiểm tra tính hợp lệ
    try {
      const { id } = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
      //Tạo access token mới
      const payload = {
        id,
        jti: crypto.randomUUID(),
      };
      const accessToken = await this.jwtService.signAsync(payload);
      return {
        accessToken,
        refreshToken,
      };
    } catch {
      throw new UnauthorizedException("Refresh token invalid");
    }
  }

  async logout(jti: string, exp: number) {
    //lưu token vào redis với expire bằng đúng thời gian sống của token
    const seconds = Math.ceil(exp - Date.now() / 1000);
    await redisClient.setEx(`blacklist:${jti}`, seconds, "1");
  }

  async forgotPassword(email: string) {
    //Check email trên db
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException("User không tồn tại");
    }
    //Tạo otp 6 số
    const otp = crypto.randomInt(100000, 999999).toString();
    //Lưu vào redis kèm userId
    const ttl = 300;
    await redisClient.setEx(`forgotPassword:${otp}`, ttl, user.id.toString());

    //addJob để gửi email
    await this.emailQueue.add("forgotPassword-otp", {
      otp,
      email: user.email,
    });
  }
  async verifyOtp(otp: string) {
    const userIdFromRedis = await redisClient.get(`forgotPassword:${otp}`);
    if (!userIdFromRedis) {
      throw new BadRequestException("OTP không hợp lệ");
    }
    return userIdFromRedis;
  }

  async resetPassword({
    password,
    confirmPassword,
    otp,
  }: {
    password: string;
    confirmPassword: string;
    otp: string;
  }) {
    if (password !== confirmPassword) {
      throw new BadRequestException("2 mật khẩu không khớp nhau");
    }
    const userId = await this.verifyOtp(otp);
    const newPassword = hashPassword(password);
    const user = await this.prismaService.user.update({
      where: { id: +userId },
      data: {
        password: newPassword,
      },
    });

    // add Job để gửi email
    await this.emailQueue.add("reset-password", {
      email: user.email,
    });

    //Xóa otp khỏi redis
    await redisClient.del(`forgotPassword:${otp}`);
  }
}

//redis
//jwt --> jti
