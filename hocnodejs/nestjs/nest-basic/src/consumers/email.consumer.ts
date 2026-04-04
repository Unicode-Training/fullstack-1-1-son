import { MailerService } from "@nestjs-modules/mailer";
import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor("EMAIL")
export class EmailConsumer extends WorkerHost {
  constructor(private readonly mailerService: MailerService) {
    super();
  }
  process(job: Job<any, any, string>): any {
    if (job.name === "login-notice") {
      console.log(`Gửi email tới: `, job.data.randomId);

      // await this.mailerService.sendMail({
      //   to: job.data.email,
      //   subject: "Cảnh báo đăng nhập",
      //   template: "login-notice",
      //   context: {
      //     name: job.data.name,
      //     link: job.data.link,
      //   },
      // });
      return {}; //Coi là hoàn thành
    }
  }
}
