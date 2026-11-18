import express from 'express';
import path from 'node:path';
import { indexRouter } from './routers/indexRouter.js';

const app = express();
const PORT = 3000;
const __dirname = import.meta.dirname;
const assetsPath = path.join(__dirname, 'styles');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(assetsPath));

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`listening on port ${PORT}`);
});
