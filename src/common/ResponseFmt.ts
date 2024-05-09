import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


interface Data<T> {
  data: T
}
@Injectable()
export class ResponseFmt<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<Data<T>>> {

    return next.handle().pipe(map(data => {
      return {
        data,
        status: 0,
        message: 'success',
        success: true
      }
    }))
  }
}
