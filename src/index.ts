import 'module-alias/register';
import express, { Application } from 'express';
import dotenv from 'dotenv';
import Kernal from '@middlewares/Kernal';
import Routes from '@routes';
import cors from 'cors'
console.log(cors, 'cors')
dotenv.config()
const app: Application = express();
const port:number = Number(process.env.PORT) || 8000;

// install Middleware
Kernal(app);

// install router
Routes(app);

// running server
app.listen(port, () => {
  return console.log(`Server :: Runing at port:${port}`);
}).on('error', (err) => {
  return console.error('Error', err.message);
});

