import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    metalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'metal'
    },
    quantity: {
        type: Number,
        trim: true,
        required: true
    },
    images: [{
        imageId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'media'
        }
    }],
    video: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'media'
    }
});
productSchema.plugin(uniqueValidator);
const Product = mongoose.model('product', productSchema);
export default Product;
