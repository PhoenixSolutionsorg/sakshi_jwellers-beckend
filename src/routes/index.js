import {Router} from 'express';
import account from './account-routes';
import media from './media-routes';
import product from './product-routes'
import metal from './metal-routes';

const router = Router();
const register = (app)=>{
    app.use(router);
    router.use('/api',[
        account,
        media,
        product,
        metal,
        
    ])
}
export default register;