import { Product } from "../../domain/model/Product";
import { SPIProduct } from "../../domain/spi/SpiProduct";

export const spiProductIn: SPIProduct = {

    findAllProducts: function (): Product[] {
        console.log("Function findAllProducts not implemented.");
        return [];
    }
}
