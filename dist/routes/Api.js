"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Home_1 = __importDefault(require("@controllers/Home"));
const router = (0, express_1.Router)();
router.get('/', Home_1.default.index);
router.get('/echo', Home_1.default.test);
exports.default = router;
//# sourceMappingURL=Api.js.map