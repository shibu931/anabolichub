import connectToDB from '@/utils/dbConnect'
import { NextResponse } from 'next/server';
import Order from '@/models/order'
import { format } from 'date-fns';

connectToDB()
export async function GET(req) {
    const urlParams = new URLSearchParams(req.url.slice(1)); 
    const page = parseInt(urlParams.get('page') || 1); 
    const limit = parseInt(urlParams.get('limit') || 10); 
    const searchQuery = urlParams.get('search'); 

    try {
        const query = {};
        if (searchQuery) {
            query.$text = { $search: searchQuery };
        }

        const skip = (page - 1) * limit; 
        const orders = await Order.find(query, 'orderId createdAt isNew _id')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalOrders = await Order.countDocuments(query); 
        const totalPages = Math.ceil(totalOrders / limit);

        if (!orders.length) {
            return NextResponse.json({ success: false, message: 'No orders found' }, { status: 204 }); 
        }

        const formattedOrders = orders.map(order => ({
            id: order._id.toString(),
            createdAt: format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss'),
            orderId: order.orderId,
            isNew: order.isNew
        }));

        return NextResponse.json({
            success: true,
            orders: formattedOrders,
            totalPages,
            currentPage:page
        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}