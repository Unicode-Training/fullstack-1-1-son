import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { AuthModule } from "src/auth/auth.module";
import { PermissionsModule } from "../permissions/permissions.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule, PermissionsModule],
})
export class AdminUsersModule {}
