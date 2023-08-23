import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    paymentMode : {
        type : String,
        required : true,
        trim : true,
        default : 'COD'
    },
    orderStatus : {
        type : 'String',
        required : true,
        trim : true,
        default : 'PENDING'
    },
    orderItems : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'product'
            }
        }
    ],
    billAmount : {
        type : Number,
        required : true,
        trim : true
    },
    addressId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'address'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },  
});
orderSchema.plugin(uniqueValidator);
const Order = mongoose.model('order',orderSchema);
export default Order;