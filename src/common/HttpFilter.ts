import { Request, Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch()
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();
    res.status(status).json({
      success: false,
      status,
      timestamp: new Date().getTime(),
      message: exception.message,
      path: req.url
    });
  }

}
