import { NextResponse } from "next/server";
import connectToDB from '@/utils/dbConnect'
import Order from '@/models/order';

connectToDB();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const orderId = url.searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json({ message: 'Order ID is required' }, { status: 400 });
    }

    const order = await Order.findOne({ orderId: orderId });

    if (!order || order.length === 0) {
      return NextResponse.json({ order: null, message: 'No order found for this id' }, { status: 200 });
    }

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json({ message: 'Error fetching order', order: null }, { status: 500 });
  }
}