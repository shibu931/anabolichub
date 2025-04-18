import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
    trim: true, 
  },
  productImage: {
    type: [
      {
        thumb: {
          type: String,
          required: true,
          trim: true, 
        },
        large: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5'], 
  },
  shortDescription:{
    type:String,
  },
  productPrice: {
    type: String, 
    required: true,
    trim: true,
  },
  productPricePerMg: {
    type: String, 
    default: "",
    trim: true,
  },
  brandName: {
    type: String,
    required: true,
    trim: true,
  },
  brandLink: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    href: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  subCategory: {
    type: [
      {
        href: {
          type: String,
          required: true,
          trim: true,
        },
        title: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    validate: [arrayLimit, '{PATH} exceeds the limit of 10'], 
  },
  slug: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  info: {
    type: String,
    default: "",
    trim: true,
  },
  description:{
    type:String,
  },
  sales:{
    type:Number
  },
  relatedProducts:{
    type:[Number]
  }
}, {
  timestamps: true, 
});

function arrayLimit(val) {
  return val.length <= 10; 
}

export default mongoose.models.Product || mongoose.model('Product',ProductSchema)
