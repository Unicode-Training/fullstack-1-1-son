import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./exceptions/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //khởi tạo thêm http module
  app.enableCors({
    origin: "http://127.0.0.1:1234"
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
