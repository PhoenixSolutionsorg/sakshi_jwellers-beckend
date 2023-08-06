import httpStatus from "http-status";
import repositories from "../repositories";
import logger from "../services/logger";
const {categoryRepository} = repositories;
export default{
    async addCategory(request,response,next){
        try{
            const result = await categoryRepository.createCategory(request);
            if(result)
                response.status(httpStatus.OK).json({
                    message : 'Category Added success...',
                    data : result,
                    success : true
                });
            else
                response.status(httpStatus.BAD_REQUEST).json({
                    message : 'Category adding failed',
                    data : [],
                    success : false
                })
        }catch(error){
            logger.error(error);
            console.log(error);
        }
    }
}