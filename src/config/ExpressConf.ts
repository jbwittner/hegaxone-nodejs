import express from 'express'
import { apiProductController } from '../adapters/primary/ApiProductExpres';
import { ApiProductService } from '../domain/service/ProductService';
import { AppLogger } from '../domain/utils/Logger';

export const app = express();

export const initControllerAndInject = (apiProductService: ApiProductService, logger: AppLogger) => {
    apiProductController(apiProductService, logger);
}

export const startExpressServer = async (port: number) => {
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}
