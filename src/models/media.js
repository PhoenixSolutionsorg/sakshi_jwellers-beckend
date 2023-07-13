import mongoose from 'mongoose';
const mediaSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    baseUrl : {
        type : String,
        required : true,
        trim : true
    },
    basePath : {
        type : String,
        required : true,
        trim : true
    },
    mediaFor : {
        type : String,
        trim : true,
        required : true
    },
    mediaType : {
        type : String,
        required : true,
        trim : true
    }
});
const Media = mongoose.model("Media",mediaSchema);
export default Media;