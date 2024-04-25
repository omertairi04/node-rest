"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("../controllers/main");
const router = (0, express_1.default)();
router.get("/", main_1.hello);
router.get("/about", main_1.about);
exports.default = router;
//# sourceMappingURL=main.js.map