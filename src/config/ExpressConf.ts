import express from 'express'
import { apiProductController } from '../adapters/primary/ApiProductExpres';

export const app = express();

export const startExpressServer = async (port: number) => {
    apiProductController();
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}
