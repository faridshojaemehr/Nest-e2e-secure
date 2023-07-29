import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as CryptoJS from "crypto-js";

@Injectable()
export class EncryptInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const encryptedData = CryptoJS.AES.encrypt(
          jsonData,
          "YOUR_SECRET_KEY"
        ).toString();

        return encryptedData;
      })
    );
  }
}
