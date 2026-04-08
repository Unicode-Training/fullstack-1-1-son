import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor("REPORTS")
export class ReportConsumer extends WorkerHost {
  process(job: Job<any, any, string>): any {
    if (job.name === "generate-daily-report") {
      console.log(`Đang xử lý report`, job.data);
    }
  }
}
