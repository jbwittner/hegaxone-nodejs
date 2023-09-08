import express from 'express'
import { apiProductController } from '../adapters/primary/ApiProductExpres';
import { ApiProductService } from '../domain/service/ProductService';

export const app = express();

export const initControllerAndInject = (apiProductService: ApiProductService) => {
    apiProductController(apiProductService);
}

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}
