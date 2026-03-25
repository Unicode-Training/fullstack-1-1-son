import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QueryString, UserBody } from 'src/types/users.type';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getUsers(query: QueryString) {
    const { limit = 5, page = 1 } = query;
    //fallback
    const skip = (page - 1) * limit;
    const users = await this.prismaService.user.findMany({
      //   select: {
      //     id: true,
      //     name: true,
      //     status: true,
      //   },
      //   omit: {
      //     status: true,
      //   },
      orderBy: {
        id: 'desc',
      },
      take: +limit,
      skip: +skip,
      include: {
        phone: true,
        posts: true,
      },
      where: {
        posts: {
          some: {},
        },
      },
    });

    const count = await this.prismaService.user.count();
    return {
      users,
      count,
    };
  }
  getUser(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        phone: true,
        posts: true,
      },
    });
  }
  createUser({ phone, ...userData }: UserBody) {
    return this.prismaService.user.create({
      data: {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
        phone: {
          create: {
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      },
    });
  }
  updateUser({ phone, ...userData }: UserBody, id: number) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...userData,
        updatedAt: new Date(),
        phone: {
          update: {
            phone: phone,
          },
        },
      },
      include: {
        phone: true,
      },
    });
  }
  async deleteUser(id: number) {
    await this.prismaService.phone.delete({
      where: {
        userId: id,
      },
    });
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
