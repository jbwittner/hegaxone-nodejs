import { ApiProductInterface } from "../api/ApiProductInterface";
import { Product } from "../model/Product";
import { SPIProduct } from "../spi/SpiProduct";
import { AppLogger } from "../utils/Logger";

export class ApiProductService implements ApiProductInterface {
    constructor(private spiProductIn: SPIProduct, private logger: AppLogger){}

    toto = (id: string) => {
        const product: Product = {
            id: "",
            name: "",
            price: 0,
            quantity: 0
        }
        return product
    };

    getProductById = (productId: string) => {
        const product: Product = {
            id: "",
            name: "",
            price: 0,
            quantity: 0
        }
        return product
    };

    create = (data: number) => {
        const product: Product = {
            id: "",
            name: "",
            price: 0,
            quantity: 0
        }
        return product
    };

    listProducts  = () => {
        this.logger.info("Domain listProduct")
        this.spiProductIn.findAllProducts();
        return []
    };

}