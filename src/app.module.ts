import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { FactoryTestServiceService } from "./factory-test-service/factory-test-service.service";
import { ListModule } from './list/list.module';
import { ConfigModule } from "./config/config.module";

@Module({
  imports: [ TestModule, UserModule, ListModule, ConfigModule.forRoot({
    path: '/wz'
  }) ],
  controllers: [ AppController, TestController ],
  providers: [
    AppService,
    //  service 自定义名称
    // 自定义注入值
    {
      provide: 'Shop',
      useValue: [ 'TB', 'PDD', 'JD' ]
    },
    FactoryTestServiceService,
    // 工厂模式
    {
      provide: 'Factory',
      inject: [ FactoryTestServiceService ],
      // useFactory() {
      //   return FactoryTestServiceService.getFactoryTestServiceData()
      // },
      async useFactory(FactoryTestServiceService: FactoryTestServiceService) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(FactoryTestServiceService.getFactoryTestServiceDataAsync());
          }, 9999);
        });

      }

    }

  ],
})
export class AppModule {
}
