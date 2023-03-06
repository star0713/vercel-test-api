"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index = (req, res) => {
    res.send({
        message: 'Hello World'
    });
};
const test = (req, res) => {
    res.send({ message: "Hello" });
};
const Home = {
    index,
    test
};
exports.default = Home;
//# sourceMappingURL=Home.js.map