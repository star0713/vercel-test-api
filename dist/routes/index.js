"use strict";
/**
 * Define all API routes
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = __importDefault(require("./Api"));
const Routes = (app) => {
    app = app.use('/', Api_1.default);
    return app;
};
exports.default = Routes;
//# sourceMappingURL=index.js.map