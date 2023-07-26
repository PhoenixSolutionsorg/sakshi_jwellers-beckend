import bcrypt from 'bcryptjs';
import user from "../models/user"
import jwt from '../services/jwt';
import logger from '../services/logger';
export default {
    async findOne(token){
        try{
            const isUser = await user.findOne({token});
            if(isUser?.email)
                return true;
            else
                throw new Error('Unauthorized user');
        }catch(error){
            logger.error(`Unauthorized user error ${error}`);
            console.log(error);
        }
    },
    async signUp(request) {
        try {
            const { first_name, last_name, email, contact, password, address, date_of_birth, date_of_anniversry } = request.body;
            const newPassword = await this.genrateHashPassword(password);
            const result = await user.create({ first_name, last_name, email, contact, password: newPassword, address, date_of_birth, date_of_anniversry });
            return result;
        } catch (error) {
            return error;
        }
    },
    async checkUser(email) {
        try {
            const isUser = await user.findOne({ email });
            if (isUser?.email)
                return false;
            else
                return true;
        } catch (error) {
            return error;
        }
    },
    async signIn({ email, password }) {
        try {
            const isUser = await user.findOne({ email });
            if (isUser?.email) {
                const checkPassword = await bcrypt.compare(isUser.password, password);
                const payload = {
                    name: isUser?.name,
                    email: isUser?.email,
                    password: isUser?.password
                }
                const genratedToken = await jwt.createToken(payload);
                const signIn = await user.updateOne({ email: isUser?.email }, {$set:{ token: genratedToken }});
                // {isUser?.token : genratedToken}
                // isUser.password : undefined;
                return isUser;
            }
            else
                throw new Error('User not found');
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    async genrateHashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(7);
            return await bcrypt.hash(password, salt);
        } catch (error) {
            return error;
        }
    },
    async signOut(email){
        try{
            const result = await user.updateOne({email},{$set :{token : null}});
            return result?.modifiedCount;
        }catch(error){
            return error;

        }
    }
}