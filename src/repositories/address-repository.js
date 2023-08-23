import address from '../models/address';
import logger from '../services/logger';
export default {

    async getAllAddresses(request){
        try{
            const {userId} = request.body;
            const result = address.findOne({userId});
            console.log(result);
            return result;
        }catch(error){
            console.log(error);
            logger.error(error);
            return error;
        }
    },

    async createAddress(request){
        try{
            const {address} = request.body;
        }catch(error){
            console.log(error);
            logger.error(error);
        }
    }
}