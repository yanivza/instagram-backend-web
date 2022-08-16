import 'dotenv/config';
import express from 'express';
import appRouter from './routes';

const app = express();

app.use(appRouter);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});