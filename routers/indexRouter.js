import { Router } from 'express';
import {
	addNewItemPost,
	deleteItemPost,
	getInventory,
	updateItemGet,
	updateItemPost,
	searchItemGet,
	orderFlowersGet,
} from '../controllers/productsController.js';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
	if (req.query.order) {
		orderFlowersGet(req, res);
	} else {
		getInventory(req, res);
	}
});
indexRouter.post('/create', addNewItemPost);
indexRouter.get('/update/:id', updateItemGet);
indexRouter.post('/update/:id', updateItemPost);
indexRouter.post('/delete/:id', deleteItemPost);
indexRouter.get('/search', searchItemGet);

export { indexRouter };
