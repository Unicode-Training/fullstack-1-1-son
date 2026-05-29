import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ZodSerializerInterceptor, ZodValidationPipe } from "nestjs-zod";
// import { MailerModule } from "@nestjs-modules/mailer";
// import { EjsAdapter } from "@nestjs-modules/mailer/adapters/ejs.adapter";
// import { join } from "path";
import { BullModule } from "@nestjs/bullmq";
import { ReportsModule } from "./reports/reports.module";
import { DashboardModule } from "./admin/dashboard/dashboard.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AdminUsersModule } from "./admin/users/users.module";
import { ProductsModule } from "./admin/products/products.module";
import { PermissionsModule } from './admin/permissions/permissions.module';
import { SocketGateway } from './gateway/socket/socket.gateway';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OrdersModule } from './orders/orders.module';
import { NotificationsModule } from './admin/notifications/notifications.module';
import { CacheModule } from "@nestjs/cache-manager";
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';
import { KeyvCacheableMemory } from 'cacheable';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    PostsModule,
    BullModule.forRoot({
      connection: {
        host: "localhost",
        port: 6379,
      },
    }),
    ReportsModule,
    DashboardModule,
    AdminUsersModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 500,
        },
      ],
    }),
    ProductsModule,
    PermissionsModule,
    EventEmitterModule.forRoot(),
    OrdersModule,
    NotificationsModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => {
        return {
          stores: [
            new Keyv({
              store: new KeyvCacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            new KeyvRedis('redis://localhost:6379'),
          ],
        };
      },
    })
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
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    SocketGateway,
  ],
})
export class AppModule { }

//register
// - công việc 1 --> gửi email
// - công việc 2 --> đẩy data sang phần mềm phân tích dữ liệu
// - công việc 3 --> gửi thông báo telegram
//áp dụng: các hàm đã có sẵn nhưng các file khác