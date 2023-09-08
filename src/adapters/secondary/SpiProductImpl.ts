import { SPIProduct } from "../../domain/spi/SpiProduct";
import { AppLogger } from "../../domain/utils/Logger";

export class ProductRepository implements SPIProduct {

    constructor(private logger: AppLogger){}

    findAllProducts = () => {
        this.logger.warn("Repository find all product")
        return []
    }
}
