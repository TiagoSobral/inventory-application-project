import { express } from 'express';
import { path } from 'node:path';

const app = express();
const PORT = 3000;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`listening on port ${PORT}`);
});
