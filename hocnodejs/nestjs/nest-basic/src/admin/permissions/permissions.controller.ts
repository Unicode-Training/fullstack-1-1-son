import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { RoleGuard } from "src/guards/role/role.guard";
import { SuperAdminGuard } from "src/guards/super-admin/super-admin.guard";

@Controller("admin")
@UseGuards(AuthGuard, RoleGuard, SuperAdminGuard)
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}
  @Get()
  findAll() {
    return "permissions";
  }

  @Get("/roles")
  getRoles() {
    return this.permissionsService.getRoles();
  }
  @Post("/roles")
  createRoles(@Body() body: { name: string }) {
    return this.permissionsService.createRole(body);
  }
  @Put("/roles/:roleId/permissions")
  assignPermissions(@Param("roleId") id: number, @Body() body: any) {
    return this.permissionsService.assignPermissions(+id, body);
  }
  @Put("/roles/:roleId/users")
  assignUsers(@Param("roleId") id: number, @Body() body: any) {
    return this.permissionsService.assignUsers(+id, body);
  }
}
