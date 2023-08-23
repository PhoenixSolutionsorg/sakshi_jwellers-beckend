import category from '../models/category';
import logger from '../services/logger';
export default{
    async createBulkCategories(request){
        try{
            const {categories} = request.body;
            const result = await category.insertMany(categories);
            return result;
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    },
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
                {$skip:offset || 0},
                {$limit : limit || 100},
                {$sort : {name : name|| -1}},
            ]);
            console.log(result);
            return result;
        }catch(error){
            logger.error(error);
        }
    },
    async updateCategory(request){
        try{
            const {id,name} = request.body;
            const result = await category.findByIdAndUpdate({_id:id},{name});
            return result;
        }catch(error){
            logger.error(error);
        }
    },
    async deleteCategory(request){
        try{
            const {name,id} = request.body;
            const result = await category.findOneAndDelete({_id : id,name});
            console.log(result);
            return result;
        }catch(error){
            logger.error(error);
            throw error;
        }
    }
}