import { app } from "../../config/ExpressConf";
import { Product } from "../../domain/model/Product";
import { ApiProductService } from "../../domain/service/ProductService";
import { AppLogger } from "../../domain/utils/Logger";

export const apiProductController = (apiProductService: ApiProductService, logger: AppLogger) => {
    app.get('/products', (_req, res) => {
        logger.error("Express /products")
        const products: Product[] = apiProductService.listProducts();
        res.send(products);
      });


    app.get('/products2', (_req, res) => {
      logger.error("Express /products 2")
      const products: Product[] = apiProductService.listProducts();
      res.send(products);
    });
    
}

