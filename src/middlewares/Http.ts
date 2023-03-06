/**
 * Defines all the requests in HTTP
 */ 

import cors from 'cors';
import { Application } from 'express';
import compress from 'compression';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import hpp from 'hpp';
import helmet from 'helmet';

const Http = (app: Application): Application => {
  console.info('Booting the \'HTTP\' middleware...');
  
  // Enables morgan 
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

  // Enable hpp
  app.use(hpp())
  
  // Enables helmet
  app.use(helmet());


  // Enables the request body parser
  app.use(bodyParser.json({
    limit: process.env.APP_MAX_UPLOAD_LIMIT || '50mb'
  }));
  
  // app.use(bodyParser.urlencoded({
  //   limit: process.env.APP_MAX_UPLOAD_LIMIT || '50mb',
  //   parameterLimit: Number(process.env.APP_MAX_PARAMETER_LIMIT) || 1000,
  //   extended: false
  // }));

  // Disable the x-powered-by header in response
  // app.disable('x-powered-by');

  // Enables the CORS
  app.use(cors());

  // Enables the "gzip" / "deflate" compression for response
  app.use(compress());

  return app;
}


export default Http;