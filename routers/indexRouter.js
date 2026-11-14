import { Router } from 'express';
import {
	addNewItemPost,
	deleteItemPost,
	getInventory,
} from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', getInventory);
indexRouter.post('/create', addNewItemPost);
indexRouter.post('/delete/:id', deleteItemPost);

export { indexRouter };
