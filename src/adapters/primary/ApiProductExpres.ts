import { app } from "../../config/ExpressConf";
import { apiProductService } from "../../config/Injection";
import { Product } from "../../domain/model/Product";

export const apiProductController = () => {
    app.get('/products', (_req, res) => {
        const products: Product[] = apiProductService.listProducts();
        res.send(products);
      });
    
}

