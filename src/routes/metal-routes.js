import { Router } from "express";
import controllers from "../controllers";

const {metalControllers} = controllers;
const router = Router();

router.post('/create-metal',metalControllers.createMetal);

export default router;