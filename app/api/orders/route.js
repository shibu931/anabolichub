import { NextResponse } from "next/server";
import connectToDB from '@/utils/dbConnect'
import Order from '@/models/order';
import Address from '@/models/address';

connectToDB();

export async function GET(req) {
    try {
      const url = new URL(req.url);
      const userId = url.searchParams.get('userId');
  
      if (!userId) {
        return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
      }
  
      const orders = await Order.find({ userId: userId }).populate('products.productId');;
  
      if (!orders || orders.length === 0) {
        return NextResponse.json({ orders: [], message: 'No orders found for this user' }, { status: 200 });
      }
  
      return NextResponse.json({ orders }, { status: 200 });
    } catch (error) {
      console.error('Error fetching orders:', error);
      return NextResponse.json({ message: 'Error fetching orders', orders: [] }, { status: 500 });
    }
}

export async function PUT(req){
  try {
    const url = new URL(req.url);
    const orderId = url.searchParams.get('orderId');
    if (!orderId) {
      return NextResponse.json({ message: 'Order Id is required' }, { status: 400 });
    }
    const data = await req.json()
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ message: 'Request body is empty, nothing to update' }, { status: 400 });
  }
    const order = await Order.findOneAndUpdate(
      { orderId: orderId }, // Find by orderId
      data, // The update data
      { new: true, runValidators: true } // Options: return updated doc and run validators
    );

    if (!order) {
        return NextResponse.json({ success: false, message: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: order }, { status: 200 });
} catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
}
}