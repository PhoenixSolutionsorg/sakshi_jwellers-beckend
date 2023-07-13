import dotenv from 'dotenv';
dotenv.config();
export default {
    database : {
        dbURL : process.env.MONGODB_URL
    },
    jwtSecret : process.env.JWT_SECRET,
    jwtExpiry : process.env.JWT_EXPIRY,
}