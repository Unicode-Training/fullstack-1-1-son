import { Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { RoleGuard } from "src/guards/role/role.guard";

@Controller("admin/users")
@UseGuards(AuthGuard, RoleGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get("")
  findAll() {
    return "Get List Users";
  }

  @Post()
  create() {
    return "Create user";
  }

  @Put("/:id")
  update() {
    return "Update User";
  }

  @Delete("/:id")
  delete() {
    return "Delete user";
  }
}
