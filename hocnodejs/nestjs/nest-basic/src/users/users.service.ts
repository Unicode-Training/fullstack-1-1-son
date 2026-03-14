import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        return ['A', 'B', 'C']
    }
}