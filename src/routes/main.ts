import { Router } from "express";
import { hello, about } from "../controllers/main";

const router = Router();

router.get("/", hello);

router.get("/about", about);

export default router;
