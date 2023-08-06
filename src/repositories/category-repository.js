import category from '../models/category';
import logger from '../services/logger';
export default{
    async createCategory(request){
        try{
            const {name} = request.body;
            const result = await category.create({name});
            if(result?.name)
                return result;
            return false;
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    },
    async checkCategory(request){
        try{
            const {name} = request.body;
            const isExist = await category.findOne({name});
            if(isExist?.name)
                return false;
            return true;
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    },
    async getAllCategory(request){
        try{
            const {limit,offset,name,search} = request?.body;
            const result = await category.aggregate([
                {$skip:offset},
                {$limit : limit},
                {$sort : {name : name&& -1}},
                {$match : {name : search}}
            ]);
            console.log(result);
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    },
    async updateCategory(request){
        try{
            const {id,name} = request.body;
            const result = await category.findByIdAndUpdate({_id:id},{name});
            console.log(result);
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    }
}