import { ApiProduct } from "./api/ApiProductInterface";
import { Product } from "./entity/Product";
import { SPIProduct } from "./spi/SpiProduct";


let spiProduct: SPIProduct;

export const initService = (spiProductIn: SPIProduct) => {
    spiProduct = spiProductIn;
    return surveyRepo;
}

const surveyRepo: ApiProduct = {
    
    toto: function (id: string): Product {
        spiProduct.findAllProducts();
        throw new Error("Function not implemented.");
    },
    getProductById: function (productId: string): Product {
        throw new Error("Function not implemented.");
    },
    create: function (data: number): Product {
        throw new Error("Function not implemented.");
    },
    listProducts: function (): Product[] {
        throw new Error("Function not implemented.");
    }
}