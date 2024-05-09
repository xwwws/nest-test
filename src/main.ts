import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { VersioningType } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { ResponseFmt } from "./common/ResponseFmt";
import { HttpFilter } from "./common/HttpFilter";

const whiteList = [ '/list' ];

/**
 * 全局白名单中间件
 * @param req
 * @param res
 * @param next
 */
function middlewareWhiteList(req: Request, res: Response, next: NextFunction) {
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send({ name: '小黑子露出犄角了吧' });
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  });
  // 跨域问题解决
  app.use(cors());
  app.use(session({
    secret: "user", // 加盐
    name: "user.sid", //
    rolling: true, // 每次请求强行重新设置cookie  重置过期时间
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  }));

  // 配置静态资源访问目录
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/img'
  });
  //   全局白名单
  // app.use(middlewareWhiteList);
  //  全局使用响应拦截
  app.useGlobalInterceptors(new ResponseFmt());
  //  全局使用异常拦截
  app.useGlobalFilters(new HttpFilter())
  await app.listen(3000);
}

bootstrap();
