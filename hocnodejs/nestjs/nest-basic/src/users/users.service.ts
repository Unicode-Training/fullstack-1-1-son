import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QueryString, UserBody } from 'src/types/users.type';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getUsers(query: QueryString) {
    const { limit = 5, page = 1 } = query;
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
    });
  }
  createUser(userData: UserBody) {
    return this.prismaService.user.create({
      data: {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
  updateUser(userData: UserBody, id: number) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...userData,
        updatedAt: new Date(),
      },
    });
  }
  deleteUser(id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
