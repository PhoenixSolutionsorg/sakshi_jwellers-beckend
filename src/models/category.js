import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }
});
categorySchema.plugin(uniqueValidator);
const Category = mongoose.model('category',categorySchema);
export default Category;