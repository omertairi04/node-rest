"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/mainRoutes.ts
const express_1 = require("express");
const main_1 = require("../controllers/main");
const router = (0, express_1.Router)();
router.get("/", main_1.hello);
router.get("/about", main_1.about);
exports.default = router;
