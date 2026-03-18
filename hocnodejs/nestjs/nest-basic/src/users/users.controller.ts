import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { type QueryString, type UserBody } from 'src/types/users.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  // @HttpCode(404) //Thay đổi status code mặc định do nest sinh ra
  findAll(@Query() query: QueryString) {
    return this.usersService.getUsers(query);
  }
  @Get('/:id')
  async find(@Param('id') userId: number) {
    const user = await this.usersService.getUser(+userId);
    if (!user) {
      throw new NotFoundException('Không tìm thấy user');
    }
    return user;
  }
  @Post('/')
  create(@Body() body: UserBody) {
    return this.usersService.createUser(body);
  }
  @Put('/:id')
  update(@Body() body: UserBody, @Param('id') id: number) {
    return this.usersService.updateUser(body, +id);
  }
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.usersService.deleteUser(+id);
  }
}
