import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PermissionsService {
  constructor(private readonly prismaService: PrismaService) {}
  getRoles() {
    return this.prismaService.role.findMany();
  }
  createRole(body: { name: string }) {
    return this.prismaService.role.create({
      data: body,
    });
  }
  async assignPermissions(roleId: number, body: any) {
    const permissonList = await Promise.all(
      body.map(async (permissionValue: string) => {
        const permissionFromDb = await this.prismaService.permission.findFirst({
          where: {
            name: permissionValue,
          },
        });
        if (permissionFromDb) {
          return permissionFromDb;
        }
        return this.prismaService.permission.create({
          data: {
            name: permissionValue,
          },
        });
      }),
    );

    return Promise.all(
      permissonList.map(async (item) => {
        const existing = await this.prismaService.rolePermissions.findFirst({
          where: {
            roleId,
            permissionId: item.id,
          },
        });
        if (!existing) {
          return await this.prismaService.rolePermissions.create({
            data: {
              roleId,
              permissionId: item.id,
            },
          });
        }
        return existing;
      }),
    );
  }

  assignUsers(roleId: number, body: any) {
    return Promise.all(
      body.map(async (item: number) => {
        const existing = await this.prismaService.userRole.findFirst({
          where: {
            roleId,
            userId: item,
          },
        });
        if (!existing) {
          return await this.prismaService.userRole.create({
            data: {
              roleId,
              userId: item,
            },
          });
        }
        return existing;
      }),
    );
  }
  async getPermissionByUser(userId: number) {
    const roles = await this.prismaService.userRole.findMany({
      where: {
        userId,
      },
    });
    const permissionNames: string[] = [];
    for (const role of roles) {
      const permissions = await this.prismaService.rolePermissions.findMany({
        where: { roleId: role.roleId },
        include: { permission: true },
      });
      for (const permission of permissions) {
        if (!permissionNames.includes(permission.permission.name as string)) {
          permissionNames.push(permission.permission.name as string);
        }
      }
    }
    return permissionNames;
  }
}
