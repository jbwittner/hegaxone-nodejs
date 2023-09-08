import { Product } from "../entity/Product";

export type FindAllProducts = () => Product[];

export interface SPI {
  findAllProducts: FindAllProducts;
}
