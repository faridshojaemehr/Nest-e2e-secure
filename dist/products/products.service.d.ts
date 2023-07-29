import { Product } from "./product.model";
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): number;
    getProducts(): Product[];
    getSingleProduct(prodId: number): Product;
    updateProduct(prodId: number, prodTitle: string, prodDesc: string, prodPrice: number): Promise<Product>;
    private findProduct;
}
