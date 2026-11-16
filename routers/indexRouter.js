import { Router } from 'express';
import {
	addNewItemPost,
	deleteItemPost,
	getInventory,
	updateItemGet,
	updateItemPost,
} from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', getInventory);
indexRouter.post('/create', addNewItemPost);
indexRouter.get('/update/:id', updateItemGet);
indexRouter.post('/update/:id', updateItemPost);
indexRouter.post('/delete/:id', deleteItemPost);

export { indexRouter };
