import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import fs from 'fs';
import {date} from 'joi';
export default {
    convertDateFormate(dateTime,formate='YYYY-MM-DD'){
        return dayjs(dateTime).format(formate);
    },
    getCurrentDateFormate(formate){
        return dayjs().format(formate ?? 'YYYY-MM-DD');
    },
    validateEmail(email){
        const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return expression.test(String(email).toLowerCase());
    },
    genrateRandomNumber(length){
        try{
                return Math.floor(10**(length-1)+Math.random()*9*10**(length-1));
        }catch(error){
            console.log(error);
            throw Error(error);
        }
    }
}