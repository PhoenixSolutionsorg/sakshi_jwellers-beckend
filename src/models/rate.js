import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const rateSchema = new mongoose.Schema({
    price : {
        type:String,
        trim:true,
        required:true,
    },
    metalId:{
        type:mongoose.Schema.TypesObjectId,
        ref:'metal'
    }
});
const Rate = mongoose.model('rate',rateSchema);
export default Rate;