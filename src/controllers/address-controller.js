import httpStatus from "http-status";
import repositories from "../repositories";
const {addressRepository} = repositories;
export default {
    async getUserAddress(request,response,next){
        try{
            const result = await addressRepository.getAllAddresses(request);
            if(result)
                return response.status(httpStatus.OK).json({
                    success : true,
                    data : result,
                    message : 'User address are here'
                });
            return response.status(httpStatus.BAD_REQUEST).json({
                data : [],
                success : false,
                message : 'No address found'
            });
        }catch(error){
            logger.error(error);
            console.log(error);
            next(error);
        }
    },
}