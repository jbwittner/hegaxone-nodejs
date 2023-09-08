import { ApiProduct } from "../domain/api/ApiProductInterface";
import { Product } from "../domain/entity/Product";

export const surveyRepo: ApiProduct = {
    toto : (plou: number) => {
        throw new Error("Function not implemented.");
    },
    getProductById: function (): Product {
        throw new Error("Function not implemented.");
    },
    create: function (data: number): Product {
        throw new Error("Function not implemented.");
    },
    listProducts: function (): Product[] {
        throw new Error("Function not implemented.");
    }
}

const tata = surveyRepo.toto("String")

console.log(tata)