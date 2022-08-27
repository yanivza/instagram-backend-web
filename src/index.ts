import 'dotenv/config';
import express from 'express';
import appRouter from './routes';
import {connectToDb} from "./models/db";
import cookieParser from 'cookie-Parser';

const app = express();
app.use(cookieParser())
app.use(express.json());


app.use(appRouter);
connectToDb().then(() => {
    app.listen(process.env.PORT, () => console.log('app is running'));
    console.log(process.env.PORT)
}).catch();

