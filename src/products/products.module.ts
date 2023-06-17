import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
