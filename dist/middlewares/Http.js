"use strict";
/**
 * Defines all the requests in HTTP
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const bodyParser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const Http = (app) => {
    console.info('Booting the \'HTTP\' middleware...');
    // Enables morgan 
    app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
    // Enable hpp
    app.use((0, hpp_1.default)());
    // Enables helmet
    app.use((0, helmet_1.default)());
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
    app.use((0, cors_1.default)());
    // Enables the "gzip" / "deflate" compression for response
    app.use((0, compression_1.default)());
    return app;
};
exports.default = Http;
//# sourceMappingURL=Http.js.map