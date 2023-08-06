import httpStatus from "http-status";
import repositoriesfrom from "../repositories";
import logger from "../services/logger";
const {categoryRepository} = repositoriesfrom;
export default{
    async checkCategory(request,response,next){
        try{
            const result = await categoryRepository.checkCategory(request);
            if(result)
                next();
            else    
                response.status(httpStatus.BAD_REQUEST).json({
                    message : 'Category is already exists',
                    data : [],
                    success : false
                })
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    }
}