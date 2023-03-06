"use strict";
/**
 * Register Express middlewares
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cors_1 = __importDefault(require("./Cors"));
const Http_1 = __importDefault(require("./Http"));
const Statics_1 = __importDefault(require("./Statics"));
const Kernal = (app) => {
    const isCORSEnabled = JSON.parse(process.env.CORS_ENABLED);
    // Check if cors is enabled
    if (isCORSEnabled) {
        // Mount CORS middleware
        app = (0, Cors_1.default)(app);
    }
    // Mount basic express apis middleware
    app = (0, Http_1.default)(app);
    // Mount statics middleware
    app = (0, Statics_1.default)(app);
    return app;
};
exports.default = Kernal;
//# sourceMappingURL=Kernal.js.map