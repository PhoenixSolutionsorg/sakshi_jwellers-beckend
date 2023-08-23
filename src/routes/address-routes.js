import {Router} from 'express';
import controllers from '../controllers';
import middleware from '../middleware';
const {accountMiddleware,validateMiddleware} = middleware;
const {addressController} = controllers;
const router = Router();

router.post('get-address',
    addressController.getUserAddress
);

export default router;