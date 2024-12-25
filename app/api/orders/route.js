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