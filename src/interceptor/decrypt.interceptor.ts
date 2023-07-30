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
export class DecryptInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((encryptedData) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, "YOUR_SECRET_KEY");
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        return decryptedData;
      })
    );
  }
}
