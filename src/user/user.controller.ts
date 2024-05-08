import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Headers,
  Req,
  Res,
  Session
} from '@nestjs/common';
import { UserService } from './user.service';
import * as  svgCaptcha from 'svg-captcha'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  findAll(@Query() req: any) {
    console.log(req);
    return {
      statusCode: 200,
      ...req
    };
  }

  @Post()
  create(@Body('name') name: any, @Body('code') code, @Session() session) {
    console.log(`session-code: ${session.code}`);
    console.log(`code: ${code}`);
    return {
      statusCode: 200,
      message: {
        name,
        isSame: code === session.code
      }
    };
  }


  @Get(':id/get')
  findId(@Param("id") id, @Param("name") name, @Headers() { token }) {
    console.log(id);
    console.log(name);
    console.log(token);
    return {
      statusCode: 200,
      message: {
        name, id, token
      }
    };
  }
  @Get('code')
  createCode (@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size:4,
      fontSize: 50,
      width:200,
      height: 50,
      background: '#cc9966'
    })
    console.log(captcha.text);
    session.code = captcha.text
    res.type('image/svg+xml')
    res.send(captcha.data)
  }
}

