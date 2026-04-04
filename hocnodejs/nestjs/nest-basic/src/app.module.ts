import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ZodSerializerInterceptor, ZodValidationPipe } from "nestjs-zod";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/adapters/ejs.adapter";
import { join } from "path";
import { BullModule } from "@nestjs/bullmq";

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    PostsModule,
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
        dir: join(__dirname, "..", "mail/templates"),
        adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    BullModule.forRoot({
      connection: {
        host: "localhost",
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
