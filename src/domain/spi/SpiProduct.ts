import { Product } from "../entity/Product";

export type FindAllProducts = () => Product[];

export type SPIProduct = {
  findAllProducts: FindAllProducts;
}
