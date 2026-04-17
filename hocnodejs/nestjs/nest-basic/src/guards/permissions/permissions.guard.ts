import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  Type,
} from "@nestjs/common";
import { PermissionsService } from "src/admin/permissions/permissions.service";

export const PermissionsGuardMixin = (
  permissionName: string,
): Type<CanActivate> => {
  @Injectable()
  class PermissionsGuard implements CanActivate {
    constructor(private readonly permissionService: PermissionsService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      const permissions = await this.permissionService.getPermissionByUser(
        user.id,
      );
      if (permissions.includes(permissionName)) {
        return true;
      }
      return false;
    }
  }
  return mixin(PermissionsGuard);
};
