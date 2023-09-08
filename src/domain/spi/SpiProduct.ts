import { Product } from "../model/Product";

export type FindAllProducts = () => Product[];

export interface SPIProduct {
  findAllProducts: FindAllProducts;
}
