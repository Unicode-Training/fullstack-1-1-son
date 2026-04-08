import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";

@Injectable()
export class ReportsService {
  constructor(
    @InjectQueue("REPORTS") private reportQueue: Queue,
    @InjectQueue("EMAIL01") private emailQueue: Queue,
  ) {}

  async onModuleInit() {
    // Chạy mỗi phút bằng Cron expression
    await this.reportQueue.add(
      "generate-daily-report",
      { data: "some-info" },
      {
        repeat: {
          pattern: "*/10 * * * * *", // Chạy mỗi phút
        },
        removeOnComplete: true, // Xóa log sau khi xong để tránh đầy Redis
      },
    );
    await this.emailQueue.add(
      "login-notice1",
      {
        email: "hoangan.web@gmail.com",
        name: "Hoàng An Unicode",
        link: "http://unicode.vn/reset-password",
        randomId: Math.random(),
      },
      {
        repeat: {
          pattern: "*/10 * * * * *", // Chạy mỗi phút
        },
        removeOnComplete: true, // Xóa log sau khi xong để tránh đầy Redis
      },
    );
  }
}
