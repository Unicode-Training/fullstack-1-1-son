import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { LoginData, RegisterData } from "src/types/auth.type";
import { hashPassword, verifyPassword } from "src/utils/hashing";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
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
    };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRED as unknown as number,
    });
    return { accessToken, refreshToken };
  }
  register(dataRegister: RegisterData) {
    return this.prismaService.user.create({
      data: {
        ...dataRegister,
        password: hashPassword(dataRegister.password),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
  async profile(token: string) {
    try {
      const { id } = await this.jwtService.verifyAsync(token);
      const user = await this.prismaService.user.findUnique({
        where: { id },
      });
      return user;
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
}

//redis
