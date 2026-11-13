import { Router } from 'express';
import { getInventory } from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', getInventory);

export { indexRouter };
