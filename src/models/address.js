import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        unique: true
    },
    address: [
        {
            type: String,
            required: true,
            trim: true
        }
    ]
});
addressSchema.plugin(uniqueValidator);
const Address = mongoose.model('address',addressSchema);