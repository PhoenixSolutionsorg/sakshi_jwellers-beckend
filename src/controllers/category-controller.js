import httpStatus from "http-status";
import repositories from "../repositories";
import logger from "../services/logger";
const {categoryRepository} = repositories;
export default{
    async addBulkCategory(request,response,next){
        try{
            const result = await categoryRepository.createBulkCategories(request);
            if(result)
                response.status(httpStatus.OK).json({
                    message : 'Categories Added success...',
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
    },
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
    },
    async updateCategory(request,response,next){
        try{
            const result = await categoryRepository.updateCategory(request);
            if(result?.name)
                response.status(httpStatus.OK).json({
                    message : 'Category is updated success',
                    data : result,
                    success : false
                })
            response.status(httpStatus.BAD_REQUEST).json({
                message : 'Something went wrong',
                data : [],
                success : false
            })
        }catch(error){
            logger.error(error);
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message : 'Internal Service Error',
                data : [],
                success : false
            })
        }
    },
    async fetchCategory(request,response,next){
        try{
            const result = await categoryRepository.getAllCategory(request);
            if(result)
                response.status(httpStatus.OK).json({
                    message : 'All category is here',
                    data : result,
                    success : true
                });
            return response.status(httpStatus.BAD_REQUEST).json({
                message : 'Bad Request',
                data : [],
                success : false
            });
        }catch(error){
            logger.error(error);
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message : 'Internal server error',
                data : [],
                success : false
            })            
        }
    },
    async deleteCategory(request,response,next){
        try{
            const result = await categoryRepository.deleteCategory(request);
            if(result)
                return response.status(httpStatus.OK).json({
                        message : 'Category deleted success',
                        data : result,
                        success : true
                    });
            return response.status(httpStatus.BAD_REQUEST).json({
                message : 'Category not fond',
                data : [],
                success : false
            })
        }catch(error){
            logger.error(error);
            return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message : 'Internal Server Error',
                data : [],
                success : false
            })      
        }
    }
}