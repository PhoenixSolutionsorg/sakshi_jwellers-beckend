import jwt from 'jsonwebtoken';
import config from '../config';
export default{
    createToken(paylod){
        return jwt.sign(paylod,config.jwtSecret,{expiresIn : config.jwtExpiry});
    },
    decodeToken(){
        return jwt.decode(token,{complete:true});
    },
    verifyToken(){
        return jwt.verify(token,config.jwtSecret,{expiresIn:config.jwtExpiry});
    }
}