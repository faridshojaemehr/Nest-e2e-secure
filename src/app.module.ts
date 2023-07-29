import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { Product } from "./models/product.model";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { EncryptInterceptor } from "./interceptor/encrypt.interceptor";
import { DecryptInterceptor } from "./interceptor/decrypt.interceptor";

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "admin",
      password: "123456",
      database: "secureDB",
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: EncryptInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: DecryptInterceptor,
    },
  ],
})
export class AppModule {}
