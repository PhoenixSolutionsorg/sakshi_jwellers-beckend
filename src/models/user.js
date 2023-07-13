    import mongoose from "mongoose";
    import uniqueValidator from 'mongoose-unique-validator';
    const userSchema = new mongoose.Schema({
        first_name : {
            type : String,
            required : true,
            trim : true
        },
        last_name : {
            type : String,
            required : true,
            trim : true
        },
        email : {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        contact : {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        address : {
            type : String,
            required : true,
            trim : true
        },
        date_of_birth : {
            type : String,
            required : true,
            trim : true
        },
        date_of_anniversry : {
            type : String,
            required : true,
            trim : true
        },
        token : {
            type : String,
            trim : true
        }
    });
    userSchema.plugin(uniqueValidator);
    const User = mongoose.model('user',userSchema);
    export default User;