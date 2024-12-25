import { NextResponse } from "next/server";
import connectToDB from '@/utils/dbConnect'
import Order from '@/models/order';
import Cart from '@/models/cart';
import Address from '@/models/address';
import { generateOrderId } from "@/lib/utils";

connectToDB();
export async function POST(req) {
    try {
        const { userId, addressData } = await req.json();

        if (!userId || !addressData) {
            return NextResponse.json({ message: 'User ID and address data are required' }, { status: 400 });
        }
        let address;
        const existingAddress = await Address.findOne({ userId: userId });

        if (existingAddress) {
            Object.assign(existingAddress, addressData);
            await existingAddress.save();
            address = existingAddress;
        } else {
            addressData.userId = userId;
            const newAddress = new Address(addressData);
            await newAddress.save();
            address = newAddress;
        }

        const cart = await Cart.findOne({ userId: userId }).populate('item.product');

        if (!cart || cart.item.length === 0) {
            return NextResponse.json({ message: 'Cart is empty' }, { status: 400 });
        }

        let totalAmount = 0;
        const products = cart.item.map(item => {
            const priceString = item.price;
            const price = parseFloat(priceString.replace('€', '').trim());
      
            if (isNaN(price)) {
              console.error(`Invalid price format for product ${item.product}: ${item.name}`);
              throw new Error(`Invalid price format for product ${item.name}`);
              return NextResponse.json({ message: 'Invalid product price format' }, { status: 500 });
            }
      
            totalAmount += price * item.quantity;
            return {
                productId: item.product, // Store as ObjectId
                productName: item.name,
                quantity: item.quantity,
                price: item.price,
                slug: item.slug,
            };
        });

        const deliverCharge = 17;
        const finalAmount = totalAmount + deliverCharge;

        const newOrder = new Order({
            orderId:generateOrderId(),
            userId: userId,
            products: products,
            totalAmount,
            deliverCharge,
            finalAmount,
            shippingAddress: {
                name: address.name,
                email: address.email,
                phone: address.phone,
                address: address.address,
                city: address.city,
                country: address.country,
                zipCode: address.zipCode,
            },
        });

        await newOrder.save();
        await Cart.findOneAndDelete({ userId: userId });
        return NextResponse.json({ message: 'Order created successfully', order: newOrder }, { status: 201 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json({ message: 'Error creating order' }, { status: 500 });
    }
}