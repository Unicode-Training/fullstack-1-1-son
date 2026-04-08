import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/adapters/ejs.adapter";
import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { join } from "path";
import { EmailConsumer } from "../consumers/email.consumer";
import { ReportConsumer } from "src/consumers/report.consumer";

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: "localhost",
        port: 6379,
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "anhoang.unicode@gmail.com",
          pass: "dbyn jobd ehms iuoi",
        },
      },
      defaults: {
        from: '"Unicode Training" <anhoang.unicode@gmail.com>',
      },
      template: {
        dir: join(__dirname, "..", "..", "mail/templates"),
        adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    BullModule.registerQueue({ name: "EMAIL01" }),
    BullModule.registerQueue({
      name: "REPORTS",
    }),
  ],
  providers: [EmailConsumer, ReportConsumer],
})
export class WorkerModule {}
