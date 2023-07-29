import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { Product } from "./models/product.model";

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "farid",
      password: "123456",
      database: "TFLogic",
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
