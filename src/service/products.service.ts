import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../models/product.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): number {
    const prodId = new Date().getTime();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(prodId: number): Product {
    const product = this.findProduct(prodId);
    return product;
  }

  async updateProduct(
    prodId: number,
    prodTitle: string,
    prodDesc: string,
    prodPrice: number
  ): Promise<Product> {
    const product = await this.findProduct(prodId);
    if (product) {
      product.title = prodTitle;
      product.desc = prodDesc;
      product.price = prodPrice;
    }
    return product;
  }

  private findProduct(prodId: number): Product {
    const product = this.products.find((prod) => prod.id == prodId);
    if (!product) {
      throw new NotFoundException("Could not found product!");
    }
    return product;
  }
}
