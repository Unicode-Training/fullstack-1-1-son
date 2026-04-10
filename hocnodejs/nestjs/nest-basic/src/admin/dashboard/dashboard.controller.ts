import { Controller, Get, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { RoleGuard } from "src/guards/role/role.guard";

@Controller("dashboard")
@UseGuards(AuthGuard, RoleGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get()
  findAll() {
    return "ahihi";
  }
}
