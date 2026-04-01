import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaService } from "src/prisma.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_ACCESS_EXPIRED as unknown as number,
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}

//JWT: Stateless (Không lưu trạng thái phía server)
//Cần phải có 1 mã số bí mật lưu ở server để xác thực tính hợp lệ của token
//Thời hạn sống của token: Thường 1h
