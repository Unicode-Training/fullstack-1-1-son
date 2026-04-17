import { Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { RoleGuard } from "src/guards/role/role.guard";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { PermissionsGuardMixin } from "src/guards/permissions/permissions.guard";

@Controller("admin/products")
@UseGuards(AuthGuard, RoleGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(PermissionsGuardMixin("products:list"))
  @Get("")
  findAll() {
    return "Get List Products";
  }

  @Post()
  @UseGuards(PermissionsGuardMixin("products:create"))
  create() {
    return "Create Product";
  }

  @Put("/:id")
  @UseGuards(PermissionsGuardMixin("products:update"))
  update() {
    return "Update Product";
  }

  @Delete("/:id")
  @UseGuards(PermissionsGuardMixin("products:delete"))
  delete() {
    return "Delete Product";
  }
}
