import Joi from 'joi';
import config from 'config';
import morgan from 'morgan';
import helmet from 'helmet'
import genres from './routes/genres';
import express, { json } from 'express';
const app = express();

console.log(`app : ${app.get('env')}`)

app.use(morgan())
app.use(helmet())
app.use(json());
app.use('/api/genres', genres);

const port = process.env.PORT || 9898;
app.listen(port, () => console.log(`Listening on port ${port}...`));