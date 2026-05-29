import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CACHE_KEYS } from "src/constants/cache.constant";
import { PrismaService } from "src/prisma.service";
import { cache, incrementCache } from "src/utils/cache";

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService, @Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async findAll(query: { status: string; title: string }) {
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

    let version = await this.cacheManager.get(`posts:list:version`);
    if (!version) {
      version = await incrementCache(this.cacheManager, 'posts:list:version');
    }
    console.log(CACHE_KEYS.POSTS.LISTWITHQUERY(version as number, { status, title }));
    return cache(this.cacheManager, CACHE_KEYS.POSTS.LISTWITHQUERY(version as number, { status, title }), () => this.prismaService.post.findMany({
      where: a,
    }));
    // console.log(CACHE_KEYS.POSTS.LISTWITHQUERY({ title, status }));
    // return cache(this.cacheManager, CACHE_KEYS.POSTS.LISTWITHQUERY({ title, status }), () => this.prismaService.post.findMany({
    //   where: a,
    // }));
  }
  async find(id: number) {
    const postFromCache = await this.cacheManager.get(CACHE_KEYS.POSTS.DETAIL(id));
    if (!postFromCache) {
      const post = await this.prismaService.post.findUnique({
        where: {
          id,
        },
        include: {
          user: true,
        },
      });
      if (!post) {
        throw new NotFoundException("Post không tồn tại");
      }
      await this.cacheManager.set(CACHE_KEYS.POSTS.DETAIL(id), post);
      return post
    }

    return postFromCache;
  }
  async create(postData: any) {
    // await this.cacheManager.del(CACHE_KEYS.POSTS.LIST);
    await incrementCache(this.cacheManager, 'posts:list:version')
    return this.prismaService.post.create({
      data: {
        ...postData,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 18,
      },
    });
  }
}

//ORM = Object Relational Mapping
