import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from 'express';
import { join } from "path";
import { zip } from "compressing";

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {
  }

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file, @Res() res) {
    res.send({
      code: 200,
      data: {
        fileName: file.originalname
      }
    });
  }

  @Get('export')
  download(@Res() res: Response) {
    const imageUrl: string = join(__dirname, '../images/1715236711705.png');
    res.download(imageUrl);
  }


  @Get('stream')
  async downloadStream(@Res() res: Response) {
    const imageUrl: string = join(__dirname, '../images/1715236711705.png');
    const tarStream = new zip.Stream();
    await tarStream.addEntry(imageUrl);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=wz');
    tarStream.pipe(res)
  }


}
