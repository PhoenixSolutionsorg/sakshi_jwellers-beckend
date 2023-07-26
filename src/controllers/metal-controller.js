import httpStatus from "http-status";
import logger from "../services/logger";
import repositories from "../repositories";

const {metalRepository} = repositories;

export default{
    async createMetal(request,response,next){
        try{
            const {name} = request.body;
            const result = await metalRepository.addMetal(name);
            console.log(result);
            return response.status(httpStatus.OK).json({
                success : true,
                message : 'Metal added success...!!',
                data : []
            })
        }catch(error){
            logger.error(error);
            console.log(error);
            throw error

        }
    }
}