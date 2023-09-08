import { ApiProductInterface, ListProducts, SearchProducts } from "./api/ApiProduct";
import { Product } from "./entity/Product";
import { FindAllProducts } from "./spi/SpiProduct";

export class ProductService implements ApiProductInterface {
  constructor(private findAllProducts: FindAllProducts) {}
  
  searchProducts: SearchProducts = (productName: string) => {
    const products = this.findAllProducts();
    return products.filter((product: Product) => product.name === productName);
  };

  listProducts: ListProducts = () => {
    return this.findAllProducts();
  };

}
