import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  login() {
    //Muốn dùng hàm của users service
    // const users = this.userService.getUsers();
    // return {users}
  }
}
