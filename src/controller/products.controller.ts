import { Body, Controller, Get, Post, Param, Patch } from "@nestjs/common";
import { Product } from "../models/product.model";
import { ProductsService } from "../service/products.service";

@Controller("products")
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body("title") prodTitle: string,
    @Body("desc") prodDesc: string,
    @Body("price") prodPrice: number
  ){
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getProducts();
  }

  @Get(":id")
  getProduct(@Param("id") prodId: number) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(":id")
  updateProduct(
    @Body("id") prodId: number,
    @Body("title") prodTitle: string,
    @Body("desc") prodDesc: string,
    @Body("price") prodPrice: number
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return { id: prodId };
  }
}
