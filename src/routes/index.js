import {Router} from 'express';
import account from './account-routes';

const router = Router();
const register = (app)=>{
    app.use(router);
    router.use('/api',[
        account,
    ])
}
export default register;