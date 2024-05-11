import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

export const Role = (...args: string[]) => SetMetadata('role', args);


export const ReqUrl = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<Request>();
  // const res = ctx.switchToHttp().getResponse<Response>();
  // const next = ctx.switchToHttp().getNext<NextFunction>();
  console.log('data', data);
  return req.url;

});
