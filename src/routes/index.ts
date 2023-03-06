/**
 * Define all API routes
 */

import { Application } from "express";
import apiRouter from './Api';

const Routes = (app: Application): Application => {
  app = app.use('/', apiRouter);
  return app;
}

export default Routes;