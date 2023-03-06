/**
* Enables the CORS
*/

import cors from 'cors';
import { Application } from 'express';

const CORS = (app: Application): Application =>  {
  console.log('Booting the "CORS" middleware...');
  
  const allowedOrigins: string[] = [];
  
  const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

  app.use(cors(options));

  return app;
}


export default CORS;