import { ApiProductInterface } from "../api/ApiProductInterface";
import { Product } from "../model/Product";
import { SPIProduct } from "../spi/SpiProduct";

export class ApiProductService implements ApiProductInterface {
    constructor(private spiProductIn: SPIProduct){}

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
        console.log("Domain listProduct")
        this.spiProductIn.findAllProducts();
        return []
    };

}