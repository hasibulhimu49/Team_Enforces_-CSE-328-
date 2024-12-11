import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
//import globallyErrorHandler from './app/middlewares/globallyErrorHandler';

const app: Application = express();

// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  // const a = 10;
  res.send('Hello Developer ! This is NatureNest');
};

app.get('/', getAController);

//app.use(globallyErrorHandler);
// app.use('*' , notFound);

// console.log(process.cwd())

export default app;
