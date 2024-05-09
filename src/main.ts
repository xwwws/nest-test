import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { VersioningType } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors'
const whiteList = [ '/list' ];

/**
 * 全局白名单中间件
 * @param req
 * @param res
 * @param next
 */
function middlewareAll(req: Request, res: Response, next: NextFunction) {
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send({name:'小黑子露出犄角了吧'});
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  });
  app.use(cors())
  app.use(session({
    secret: "user", // 加盐
    name: "user.sid", //
    rolling: true, // 每次请求强行重新设置cookie  重置过期时间
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  }));
  app.use(middlewareAll);

  await app.listen(3000);
}

bootstrap();
