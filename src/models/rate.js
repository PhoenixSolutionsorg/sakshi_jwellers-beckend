import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const rateSchema = new mongoose.Schema({
    price : {
        type:String,
        trim:true,
        required:true,
    },
    metalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'metal'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const Rate = mongoose.model('rate',rateSchema);
export default Rate;