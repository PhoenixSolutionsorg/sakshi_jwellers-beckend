import httpStatus from "http-status";
import repositories from "../repositories";
import logger from "../services/logger";

const {productRepository} = repositories;

export default {
    async checkProduct(request,response,next){
        try{
            const result = await productRepository.checkekProduct(request);
            if(!result?.name)
                next();
            else
                return response.status(httpStatus.BAD_REQUEST).json({
                    message : 'This Product is Already exist',
                    data : [],
                    success : false
                })
        }catch(error){
            console.log(error);
            logger.error(error);
            next(error);
        }
    }
}