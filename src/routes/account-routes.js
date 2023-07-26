import {Router} from 'express';
import validations from '../validations';
import controllers from '../controllers';
import middleware from '../middleware';
const {accountValidator} = validations;
const {accountMiddleware,validateMiddleware} = middleware;
const {accountControllers} = controllers;
const router = Router();
router.post('/signUp',
    // validateMiddleware({schema:accountValidator.userProfileSchema}),
    accountMiddleware.checkUser,
    accountControllers.signUp
)
router.post('/signIn',
    // validateMiddleware({schema:accountValidator.userProfileSchema}),
    accountControllers.signIn
)
router.post('/signOut',
    // accountMiddleware.checkUser,
    accountControllers.signOut
)
export default router