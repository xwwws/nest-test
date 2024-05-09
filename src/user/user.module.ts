import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from "../logger/logger.middleware";

@Module({
  controllers: [ UserController ],
  providers: [ UserService ],
  exports: [ UserService ]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // 依赖注入的中间件
    /**
     * 针对某种请求方式
     */
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'user',
    //   method: RequestMethod.ALL
    // })
    /**
     * 针对user模块
     */
    // consumer.apply(LoggerMiddleware).forRoutes('user')

    /**
     * 针对该模块的所有接口
     */
    // consumer.apply(LoggerMiddleware).forRoutes(UserController)
  }
}
