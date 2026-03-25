import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('')
  findAll(@Query() query: { status: string; title: string }) {
    return this.postsService.findAll(query);
  }

  @Get('/:id')
  find(@Param('id') id: number) {
    return this.postsService.find(+id);
  }
}
