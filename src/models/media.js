import mongoose from 'mongoose';
const mediaSchema = new mongoose.Schema({
    name : {
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
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const Media = mongoose.model("Media",mediaSchema);
export default Media;