import httpStatus from 'http-status';
const validateRequest = (option) => async(request,response,next)=>{
    try{
        await option.schema.validateAsync({
            ...request.body,
            ...request.params,
            ...request.query
        });
        next();
    }catch(error){
        const errors = error;
        if(errors.iswJoi){
            error.details.forEach((errorData)=>{
                const errorObject = {
                    message : 'Ohhh something went wrong...!',
                    field : errorData.path.join('_'),
                    type : errorData.type
                };
                errors.push(errorObject);
            });
            response.status(httpStatus.BAD_REQUEST).json({
                success : false,
                error : errors,
                message : ""
            });
        };
    };
};
export default validateRequest;