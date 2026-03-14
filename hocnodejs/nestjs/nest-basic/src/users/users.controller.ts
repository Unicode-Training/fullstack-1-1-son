import { Body, Controller, Delete, Get, Headers, HttpCode, HttpException, Param, Post, Put, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import {type UserBody } from 'src/types/users.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  @Get('/')
  // @HttpCode(404) //Thay đổi status code mặc định do nest sinh ra
  findAll(@Headers() headers: {
    "x-api-key": string
  }) {
    //Lấy header
    const apiKey = headers['x-api-key'];
    console.log(apiKey);

    // console.log(request.headers['x-api-key']);

    throw new UnauthorizedException("Chưa xác thực");
    throw new HttpException("Không có quyền truy cập", 403);
    
    return this.usersService.getUsers();
  }
  @Get('/:id')
  find(@Param('id') userId: number) {
    return 'Detail: ' + userId;
  }
  @Post('/')
  @HttpCode(200)
  create(@Body() body: UserBody) {
    return body;
  }
  @Put('/:id')
  update(@Body() body: UserBody, @Param('id') id:number) {
    return {
      body,
      id
    }
  }
  @Delete('/:id')
  delete(@Param('id') id:number) {
    return `Delete: ${id}`
  }
}
