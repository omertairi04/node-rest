"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.about = exports.hello = void 0;
const hello = (req, res) => {
    return res.send("KUSHA");
};
exports.hello = hello;
const about = (req, res) => {
    res.send("About birds");
};
exports.about = about;
