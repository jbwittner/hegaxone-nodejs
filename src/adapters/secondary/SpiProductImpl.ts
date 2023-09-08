import { SPIProduct } from "../../domain/spi/SpiProduct";

export class ProductRepository implements SPIProduct {

    findAllProducts = () => {
        console.log("Repository find all product")
        return []
    }
}
