/**
 * Register Express middlewares
 */

import { Application } from "express";

import Cors from "./Cors";
import Http from "./Http";
import Statics from "./Statics";

const Kernal = (app: Application): Application => {
  const isCORSEnabled: boolean = JSON.parse(process.env.CORS_ENABLED);
  // Check if cors is enabled
  if (isCORSEnabled) {
    // Mount CORS middleware
    app = Cors(app);
  }

  // Mount basic express apis middleware
  app = Http(app);

  // Mount statics middleware
  app = Statics(app);

  return app;
}

export default Kernal;