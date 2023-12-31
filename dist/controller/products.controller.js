"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("../service/products.service");
let ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProduct(prodTitle, prodDesc, prodPrice) {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }
    getAllProducts() {
        return this.productsService.getProducts();
    }
    getProduct(prodId) {
        return this.productsService.getSingleProduct(prodId);
    }
    updateProduct(prodId, prodTitle, prodDesc, prodPrice) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return { id: prodId };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)("title")),
    __param(1, (0, common_1.Body)("desc")),
    __param(2, (0, common_1.Body)("price")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, common_1.Body)("title")),
    __param(2, (0, common_1.Body)("desc")),
    __param(3, (0, common_1.Body)("price")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=products.controller.js.map