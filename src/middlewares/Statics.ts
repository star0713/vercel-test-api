/**
 * Defines all the app-statics
 * 
 * @author Shengwu Jin <shengwu@sparkblox.com>
 */

import * as path from 'path';
import express, { Application, Express } from 'express';

const Statics = (app: Application): Application => {
  // Load Statics
  app.use('/public', express.static(path.join(__dirname, '../../public')))

  return app;
}

export default Statics;