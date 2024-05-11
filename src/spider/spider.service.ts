import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from "axios";
import * as cheerio from 'cheerio'
import * as fs from "fs";
import * as path from "path";
@Injectable()
export class SpiderService {
  async getSpider() {
    const urls: string[] = []
    const getPage = async () => {
      const url = `https://bj.ke.com/ershoufang/`
      console.log(`loading....`);
      const page = await axios.get(url).then(res => res.data)
      const $ = cheerio.load(page)
      $('.sellListContent li a .lj-lazy').each(function () {
        urls.push(`${$(this).attr('data-original')}`)
      })
    }
    await getPage()
    await this.writeImages(urls)
    console.log('写入完成');
    return '12'
  }

  async writeImages(urls: string[]) {
    urls.forEach(async url => {
      console.log(url);
      const buffer = await axios.get(url,{responseType: 'arraybuffer'}).then(res => res.data)
      const ws = fs.createWriteStream(path.join(__dirname, `../images/house_${new Date().getTime()}.jpg`))
      ws.write(buffer)
    })
  }

}
