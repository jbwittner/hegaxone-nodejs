import { spiProductIn } from "../adapters/secondary/SpiProductImpl";
import { ApiProduct } from "../domain/api/ApiProductInterface";
import { initService } from "../domain/service/ProductService";

let apiProductService: ApiProduct;

export const makeInjection = () => {
    apiProductService = initService(spiProductIn);
}

export {apiProductService};





