import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    item:[
        {product:{
            type:Number,
            required:true
        },
        slug:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
        },
        price:{
            type:String
        },
        quantity:{
            type:Number
        },
        modifiedAt: { type: Date, default: Date.now },
    }],
    modifiedAt: { type: Date, default: Date.now },
    userId:{
        type:String,
        required:true
    },
})

const Cart = mongoose.models.cart || mongoose.model("cart",CartSchema)

export default Cart;