import httpStatus from 'http-status';
import repository from '../repositories/';
const {accountRepository} = repository;
export default {
    async checkUser(request,response,next){
        try{
            const {email,contact} = request.body;
            const isUser = await accountRepository.checkUser(email,contact);
            if(isUser)
                next();
            else
                response.status(httpStatus.BAD_REQUEST).json({
                    success:false,
                    data:[],
                    message:'User is Already exists'
                })
        }catch(error){
            next(error);
        }
    }
}