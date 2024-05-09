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

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file, @Res() res) {
    console.log(file);
    res.send({
      code: 200,
      data: {
        fileName: file.originalname
      }

    })
  }
}
