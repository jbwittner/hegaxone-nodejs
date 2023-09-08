import { initService } from "@domain/ProductService";
import { Product } from "@domain/entity/Product";
import { SPIProduct } from "@domain/spi/SpiProduct";

const spiProductIn: SPIProduct = {

    findAllProducts: function (): Product[] {
        throw new Error("Function findAllProducts not implemented.");
    }
}

const apiProductService = initService(spiProductIn);

apiProductService.create(4)