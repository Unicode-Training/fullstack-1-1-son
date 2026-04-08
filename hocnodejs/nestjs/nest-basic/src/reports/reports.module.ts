import { Module } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { BullModule } from "@nestjs/bullmq";

@Module({
  providers: [ReportsService],
  imports: [
    BullModule.registerQueue({
      name: "REPORTS",
    }),
    BullModule.registerQueue({
      name: "EMAIL01",
    }),
  ],
})
export class ReportsModule {}
