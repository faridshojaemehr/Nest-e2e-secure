import { Module } from "@nestjs/common";
import { ProductController } from "../controller/products.controller";
import { ProductsService } from "../service/products.service";
import { Product } from "../models/product.model";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
