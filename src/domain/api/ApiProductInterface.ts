import { Product } from "../model/Product";

export type GetProductById = (id: string) => Product;

export interface ApiProductInterface {
  toto : GetProductById;
  getProductById: (productId: string) => Product
  create: (data: number) => Product
  listProducts: () => Product[];
}
