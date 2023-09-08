import { ApiProduct } from "../api/ApiProductInterface";
import { Product } from "../model/Product";
import { SPIProduct } from "../spi/SpiProduct";


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
        console.log("Function create not implemented.");
        const titou : Product = {
            id: "",
            name: "",
            price: 0,
            quantity: 0
        }
        spiProduct.findAllProducts();
        return titou;
    },
    listProducts: function (): Product[] {
        throw new Error("Function not implemented.");
    }
}