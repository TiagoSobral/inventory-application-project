import { Router } from 'express';
import {
	addNewItemPost,
	deleteItemPost,
	getInventory,
	updateItemGet,
} from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', getInventory);
indexRouter.get('/update/:id', updateItemGet);
indexRouter.post('/create', addNewItemPost);
indexRouter.post('/delete/:id', deleteItemPost);

export { indexRouter };
