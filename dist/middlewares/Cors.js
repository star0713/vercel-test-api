"use strict";
/**
* Enables the CORS
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const CORS = (app) => {
    console.log('Booting the "CORS" middleware...');
    const allowedOrigins = [];
    const options = {
        origin: allowedOrigins
    };
    app.use((0, cors_1.default)(options));
    return app;
};
exports.default = CORS;
//# sourceMappingURL=Cors.js.map