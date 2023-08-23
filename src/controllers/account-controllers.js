import httpStatus from "http-status";
import repositories from "../repositories";
const { accountRepository } = repositories;
export default {
    async signUp(request, response, next) {
        try {
            const result = await accountRepository.signUp(request);
            return response.status(httpStatus.OK).json({
                success: true,
                data: result,
                message: 'Sign Up success'
            });
        } catch (error) {
            next(error);
        }
    },
    async signIn(request, response, next) {
        try {
            const { body } = request;
            console.log(body);
            const result = await accountRepository.signIn(body);
            if (result) {
                return response.status(httpStatus.OK).json({
                    success: true,
                    data: result,
                    message: 'Sign In Success'
                });
            }
            else
                return response.status(httpStatus.BAD_REQUEST).json({
                    success : false,
                    data : null,
                    message : 'Username or Password is wrong'
                })
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    async signOut(request,response,next){
        try{
            const {email} = request.body;
            const result = await accountRepository.signOut(email);
            if(result)
                return response.status(httpStatus.OK).json({
                    success : true,
                    data : result,
                    message : 'Sign Out Success !!'
                });
            else
                return response.status(BAD_REQUEST).json({
                    success : false,
                    data : null,
                    message : 'Un-authorized user ?'
                })
        }catch(error){
            console.log(error);
            next(error);
        }
    }
}