import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const metalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }
});
metalSchema.plugin(uniqueValidator);
const metal = mongoose.model('metal',metalSchema);
export default metal;