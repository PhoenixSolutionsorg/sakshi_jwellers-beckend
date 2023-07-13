import bcrypt from 'bcryptjs';
import utility from '../utility';
import {user} from '../models';
export default {
    async createHashPassword(password){
        try{
            const salt = await bcrypt.genSalt(7);
            return await bcrypt.hash(password,salt);
        }catch(error){
            throw Error(error);
        }
    },
    async signUp(request){
        try{
            const verificationOtp = utility.genrateRandomNumber(6);
            const encryptedPassword = await this.createHashPassword(request.body.password);
            const {name,email,contact,anniversryDate,address,datOfBirth} = request.body;
            const userData = await user.create({name,email,password : encryptedPassword,contact,address,anniversryDate});
            return true;
        }catch(error){
            throw Error(error);
        }
    },
    async passwordCheck(password,newPassword){
        try{
                let isMatched = '';
                if(password && newPassword){
                    isMatched = await bcrypt.compare(password,newPassword);
                    return isMatched;
                }
        }catch(error){
            throw Error(error);
        }
    },
    async checkUser(email){
        try{
            let userData = await user.findOne({email});
            return userData;      
        }catch(error){
            throw Error(error);
        }
    },
    async signIn(request){
        try{
                const user = await this.checkUser(request.body.email);
                const auth = await this.passwordCheck(user?.password,request.body.password);
                return user;
        }catch(error){
            throw Error(error);
        }
    }
}