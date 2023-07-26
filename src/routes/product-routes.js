import { Router } from "express";
import controllers from "../controllers";
import validations from "../validations";
import middlewares from "../middleware";
const router = Router();
const { productValidations } = validations;
const { validateMiddleware,productMiddleware } = middlewares;
const { productControllers } = controllers;

router.post('/creat-product',
    validateMiddleware({schema : productValidations.createProductSchema}),
    productMiddleware.checkProduct,
    productControllers.createProduct
);
router.post('/view-product',
    productControllers.viewProduct
)

export default router;