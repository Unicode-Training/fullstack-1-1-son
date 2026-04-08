import { MailerService } from "@nestjs-modules/mailer";
import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor("EMAIL01")
export class EmailConsumer extends WorkerHost {
  constructor(private readonly mailerService: MailerService) {
    super();
  }
  async process(job: Job<any, any, string>): Promise<any> {
    if (job.name === "login-notice1") {
      // console.log(`Gửi email tới: `, job.data.randomId);
      console.log("Đang gửi email");
      console.log(job.data);

      await this.mailerService.sendMail({
        to: job.data.email,
        subject: "Cảnh báo đăng nhập",
        template: "login-notice",
        context: {
          name: job.data.name,
          link: job.data.link,
        },
      });
      return {}; //Coi là hoàn thành
    }
  }
}
