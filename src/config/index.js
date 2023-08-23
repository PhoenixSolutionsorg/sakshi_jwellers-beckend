import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
export default {
    database : {
        dbURL : process.env.MONGODB_URL,
    },
    app : {
        mediaStorage : 'local'
    },
    jwtSecret : process.env.JWT_SECRET,
    jwtExpiry : process.env.JWT_EXPIRY
}