import { ProductService } from "../ProductService";
import { Product } from "../entity/Product";
import { SPI } from "../spi/SpiProduct";

export type ListProducts = (id: string) => Product[];
export type SearchProducts = (productName: string) => Product[];

export interface ApiProductInterface {
  listProducts: ListProducts;
  searchProducts: SearchProducts;
}

export const api = (spi: SPI): ApiProductInterface => {
  return new ProductService(spi.findAllProducts);
};
