import { Product } from "../model/Product";

export type GetProductById = (id: string) => Product;

export type ApiProduct = {
  toto : GetProductById;
  getProductById: (productId: string) => Product
  create: (data: number) => Product
  listProducts: () => Product[];
}
