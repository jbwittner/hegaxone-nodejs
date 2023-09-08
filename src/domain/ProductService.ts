import { ApiProductInterface, ListProducts, SearchProducts } from "./api/ApiProduct";
import { Product } from "./entity/Product";
import { SPI } from "./spi/SpiProduct";

export class ProductService implements ApiProductInterface {
  constructor(private spi: SPI) {}
  
  searchProducts: SearchProducts = (productName: string) => {
    const products = this.spi.findAllProducts();
    return products.filter((product: Product) => product.name === productName);
  };

  listProducts: ListProducts = () => {
    return this.spi.findAllProducts();
  };

}
