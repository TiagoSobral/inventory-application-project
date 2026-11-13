import { Router } from 'express';
import {
	addNewItemPost,
	getInventory,
} from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', getInventory);
indexRouter.post('/', addNewItemPost);

export { indexRouter };
