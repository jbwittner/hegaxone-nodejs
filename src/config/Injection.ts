import { ProductRepository } from "../adapters/secondary/SpiProductImpl";
import { ApiProductService } from "../domain/service/ProductService";
import { AppLogger } from "../domain/utils/Logger";
import { LoggerImpl } from "../utils/LoggerImpl";
import { initControllerAndInject } from "./ExpressConf";

export const inject = () => {
    const appLogger: AppLogger = new LoggerImpl();
    const productRepository: ProductRepository = new ProductRepository(appLogger);
    const apiProductService: ApiProductService = new ApiProductService(productRepository, appLogger);
    initControllerAndInject(apiProductService, appLogger);
}
