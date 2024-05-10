import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpiderService } from './spider.service';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';

@Controller('spider')
export class SpiderController {
  constructor(private readonly spiderService: SpiderService) {}

  @Post()
  getSpider() {
    console.log('spider------------');
    this.spiderService.getSpider()

  }
}
