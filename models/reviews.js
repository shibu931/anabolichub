import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    productID:{
        type:String,
    },
    slug:{
        type:String
    },
    reviews:[
        {
            customerName:{
                type:String,
                required:true
            },
            customerEmail:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comments:{
                type:String,
                required:true
            },
            createdAt:{
                type:Date,
                default:Date.now,
            }
        }
    ]
})

export default mongoose.models.Reviews || mongoose.model('Reviews',reviewSchema)