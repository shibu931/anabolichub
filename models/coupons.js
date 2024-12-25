const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'], // "percentage" or "fixed" discount
    required: true,
  },
  discountValue: {
    type: Number,
    required: true,
    min: 0, // Ensure positive value
  },
  minPurchaseAmount: {
    type: Number,
    default: 0, // Minimum amount to apply the coupon
  },
  maxDiscount: {
    type: Number,
    default: null, // For percentage-based coupons, a max discount limit
  },
  usageLimit: {
    type: Number,
    default: 1, // Maximum times a coupon can be used
  },
  usedCount: {
    type: Number,
    default: 0, // Tracks how many times the coupon has been used
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  applicableProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Apply coupon to specific products
    },
  ],
  applicableCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', // Apply coupon to specific categories
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` field
couponSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Coupon', couponSchema);
