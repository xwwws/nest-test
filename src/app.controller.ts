import { Controller, Get, Inject, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from "./user/user.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('Shop') private readonly shop: string[],
    @Inject('Factory') private readonly factory: string,
    private readonly userService: UserService,

  ) {
  }

  @Get()
  getHello(@Res() res) {
    res.send({
      text: this.appService.getHello(),
      shops: this.shop,
      factory: this.factory
    });
  }
  @Get('app/user-service')
  getUserService(@Res() res) {
    res.send(this.userService.findAll())


  }
}
