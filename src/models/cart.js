import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const cartSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        unique : true
    },
    productId : [{
        productId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'product'
        }
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
cartSchema.plugin(uniqueValidator);
const Cart = mongoose.model('cart',cartSchema);
export default Cart; 