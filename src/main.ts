import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(session({
    secret: "user", // 加盐
    name: "user.sid", //
    rolling: true, // 每次请求强行重新设置cookie  重置过期时间
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  }))
  await app.listen(3000);
}
bootstrap();
