import connectToDB from '@/utils/dbConnect'
import { NextResponse } from 'next/server';
import Order from '@/models/order'
import { format } from 'date-fns';

connectToDB()
export async function GET(){
    try {
        const orders = await Order.find({}, 'orderId createdAt isNew _id').sort({ createdAt: -1 });

        if (!orders) {
            return NextResponse.json({ success: false, message: 'No orders found' }, { status: 404 });
        }

        const formattedOrders = orders.map(order => ({
            id: order._id.toString(), // Convert ObjectId to string
            createdAt: format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss'),
            orderId: order.orderId,
            isNew: order.isNew
        }));

        return NextResponse.json({ success: true, data: formattedOrders }, { status: 200 });
    } catch (error) {
        console.error("Error fetching articles:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // 500 for server errors
    }
}