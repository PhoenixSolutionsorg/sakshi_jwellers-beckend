import httpStatus from "http-status";
import repositories from "../repositories";
import logger from "../services/logger";
const {productRepository} = repositories;

export default {
    async createProduct(request,response,next){
        try{
            const result = await productRepository?.createProduct(request);
            return response.status(httpStatus.OK).json({
                message : 'Product Created successfully...!!',
                data : result,
                success : true
            })
        }catch(error){
            console.log(error);
            logger(error);
            next(error);
        }
    },
    async viewProduct(request,response,next){
        try{
            const result = await productRepository?.viewProduct(request);
            return response.status(httpStatus.OK).json({
                message : 'Product View success',
                data : result,
                success : true
            })
        }catch(error){
            console.log(error);
            logger(error);
            next(error);
        }
    }
}