import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(query: { status: string; title: string }) {
    const { status, title } = query;

    // return this.prismaService
    //   .$queryRaw`SELECT * FROM posts WHERE status=${status === 'true'}`;
    type Where = {
      status?: boolean;
      title?: {
        contains: string;
      };
    };
    const a: Where = {};

    if (status) {
      a.status = status === "true";
    }
    if (title) {
      a.title = {
        contains: title,
      };
    }
    console.log(a);

    return this.prismaService.post.findMany({
      where: a,
    });
  }
  find(id: number) {
    return this.prismaService.post.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }
  create(postData: any, userId: number) {
    return this.prismaService.post.create({
      data: {
        ...postData,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId,
      },
    });
  }
}

//ORM = Object Relational Mapping
