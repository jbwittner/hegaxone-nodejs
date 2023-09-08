import { Product } from "../model/Product";

export type FindAllProducts = () => Product[];

export type SPIProduct = {
  findAllProducts: FindAllProducts;
}
