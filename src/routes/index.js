import {Router} from 'express';
import account from './account-routes';
import media from './media-routes';
import product from './product-routes'
import metal from './metal-routes';
import category from './cateogry-route';

const router = Router();
const register = (app)=>{
    app.use(router);
    router.use('/api',[
        account,
        media,
        product,
        metal,
        category,
        
    ])
}
export default register;