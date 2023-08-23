import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import validations from "../validations";
const {categoryMiddleware,validateMiddleware} = middleware;
const {categoryValidations} = validations;
const {categoryController} = controllers;
const router = Router();

router.post('/bulk-create-category',
// validateMiddleware({schema : categoryValidations.createCategory}),
    categoryController.addBulkCategory
);

router.post('/create-category',
validateMiddleware({schema : categoryValidations.createCategory}),
    categoryMiddleware.checkCategory,
    categoryController.addCategory
);

router.post('/update-category',
    categoryController.updateCategory
);

router.get('/get-category',
    categoryController.fetchCategory
);

router.post('/delete-category',
    categoryController.deleteCategory
);

export default router;