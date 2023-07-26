import metal from '../models/metal.js';
import logger from '../services/logger.js';

export default {
    async addMetal(metalName){
        try{
            const result = await metal.create({name:metalName});
            return result;
        }catch(error){
            logger.error(error);
            throw error;
        }
    },
    async checkMetal(request){
        try{
            const {name} = request.body;
            const result = await metal.findOne({name});
            return result;
        }catch(error){
            logger.error(error);
            throw error;
        }
    }
}