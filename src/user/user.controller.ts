import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers } from '@nestjs/common';
import { UserService } from './user.service';

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
  create(@Body('name') name: any, @Request() request) {
    return {
      statusCode: 200,
      message: {
        name
      }
    };
  }


  @Get(':id/:name')
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
}

