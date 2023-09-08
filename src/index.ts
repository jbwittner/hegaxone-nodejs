import { initService } from "./domain/ProductService";
import { Product } from "./domain/entity/Product";
import { SPIProduct } from "./domain/spi/SpiProduct";

const spiProductIn: SPIProduct = {

    findAllProducts: function (): Product[] {
        console.log("Function findAllProducts not implemented.");
        return [];
    }
}

const apiProductService = initService(spiProductIn);

apiProductService.create(4)