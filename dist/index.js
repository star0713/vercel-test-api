"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Kernal_1 = __importDefault(require("@middlewares/Kernal"));
const _routes_1 = __importDefault(require("@routes"));
const cors_1 = __importDefault(require("cors"));
console.log(cors_1.default, 'cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8000;
// install Middleware
(0, Kernal_1.default)(app);
// install router
(0, _routes_1.default)(app);
// running server
app.listen(port, () => {
    return console.log(`Server :: Runing at port:${port}`);
}).on('error', (err) => {
    return console.error('Error', err.message);
});
//# sourceMappingURL=index.js.map