import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import validations from "../validations";
const {categoryMiddleware,validateMiddleware} = middleware;
const {categoryValidations} = validations;
const {categoryController} = controllers;
const router = Router();

router.post('/create-category',
// validateMiddleware({shcema : categoryValidations.createCategory}),
    categoryMiddleware.checkCategory,
    categoryController.addCategory
)
export default router;