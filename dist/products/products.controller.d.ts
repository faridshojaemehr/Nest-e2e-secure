import { Product } from "./product.model";
import { ProductsService } from "./products.service";
export declare class ProductController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: number;
    };
    getAllProducts(): Product[];
    getProduct(prodId: number): Product;
    updateProduct(prodId: number, prodTitle: string, prodDesc: string, prodPrice: number): {
        id: number;
    };
}
