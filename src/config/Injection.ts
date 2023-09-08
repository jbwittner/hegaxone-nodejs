import { ProductRepository } from "../adapters/secondary/SpiProductImpl";
import { ApiProductService } from "../domain/service/ProductService";
import { initControllerAndInject } from "./ExpressConf";

export const inject = () => {
    const productRepository: ProductRepository = new ProductRepository();
    const apiProductService: ApiProductService = new ApiProductService(productRepository);
    initControllerAndInject(apiProductService);
}
