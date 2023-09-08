import { app } from "../../config/ExpressConf";
import { Product } from "../../domain/model/Product";
import { ApiProductService } from "../../domain/service/ProductService";

export const apiProductController = (apiProductService: ApiProductService) => {
    app.get('/products', (_req, res) => {
        console.log("Express /products")
        const products: Product[] = apiProductService.listProducts();
        res.send(products);
      });


    app.get('/products2', (_req, res) => {
      console.log("Express /products")
      const products: Product[] = apiProductService.listProducts();
      res.send(products);
    });
    
}

