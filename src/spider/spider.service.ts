import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from "axios";
import * as cheerio from 'cheerio'
@Injectable()
export class SpiderService {
  getSpider() {
    const urls: string[] = []
    const baseUrl : string = 'https://bj.ke.com'
    const getPage = async () => {
      const url = `https://bj.ke.com/ershoufang/`
      console.log(`loading....`);
      const page = await axios.get(url).then(res => res.data)
      console.log(page);
      const $ = cheerio.load(page)
      $('.sellListContent li a img').each(function () {
        urls.push(`${baseUrl}${$(this).attr('src')}`)
      })

      console.log(urls);
    }

    getPage()
    return '12'
  }

}
