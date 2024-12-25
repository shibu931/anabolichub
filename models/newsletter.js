import mongoose from 'mongoose';

const NewsLetterSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Newsletter = mongoose.models.newsletter || mongoose.model('newsletter',NewsLetterSchema)

export default Newsletter