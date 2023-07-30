import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { EncryptData } from './encryption-utils';

export class EncryptInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const encryptedData = EncryptData(jsonData, 'secret-key');
        return encryptedData;
      }),
    );
  }
}
