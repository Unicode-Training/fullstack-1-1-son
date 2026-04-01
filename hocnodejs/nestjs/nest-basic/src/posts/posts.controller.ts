import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UseGuards,
  Req,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { AuthGuard } from "src/guards/auth/auth.guard";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get("")
  findAll(@Query() query: { status: string; title: string }) {
    return this.postsService.findAll(query);
  }

  @Get("/:id")
  find(@Param("id") id: number) {
    return this.postsService.find(+id);
  }

  @Post("")
  @UseGuards(AuthGuard)
  create(@Body() body: any, @Req() request: any) {
    return this.postsService.create(body, request.user.id as number);
  }
}
