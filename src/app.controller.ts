import { Controller, Get, Inject, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('Shop') private readonly shop: string[],
    @Inject('Factory') private readonly factory: string,
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
}
