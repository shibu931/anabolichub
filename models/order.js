const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId:{
    type:String,
    required:true
  },
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId:{
        type:Number,
        required:true
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: String,
        required: true, // Price at the time of purchase
      },
      slug:{
        type:String,
        required:true
      }
    },
  ],
  totalAmount: {
    type: Number,
    required: true, // Total amount of the order
  },
  discount: {
    type: Number,
    default: 0, // Discount applied (if any)
  },
  deliverCharge: {
    type: Number,
    required: true, // Total amount after applying discounts
  },
  finalAmount: {
    type: Number,
    required: true, // Total amount after applying discounts
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  },
  shippingAddress: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  shippingStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'canceled', 'returned'],
    default: 'pending',
  },
  orderStatus: {
    type: String,
    enum: ['processing', 'completed', 'canceled', 'returned'],
    default: 'processing',
  },
  trackingNumber: {
    type: String, // For shipping provider tracking
  },
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon', // Reference to the applied Coupon
  },
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
orderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
