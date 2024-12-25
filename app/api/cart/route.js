import { NextResponse } from "next/server";
import dbConnect from '../../../utils/dbConnect'
import Cart from '@/models/cart'

dbConnect();
export async function GET(req) {
    try {

        const url = new URL(req.url);
        const userId = url.searchParams.get('userId');

        if (!userId) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        const cart = await Cart.findOne({ userId: userId }).populate('item.product'); // Populate product details

        return NextResponse.json({ cart }, { status: 200 });
    } catch (error) {
        console.error('Error fetching cart:', error);
        return NextResponse.json({ message: 'Error fetching cart' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
  
      const { userId, cart } = await req.json();
  
      if (!userId || !cart) {
        return NextResponse.json({ message: 'User ID and cart data are required' }, { status: 400 });
      }
  
      let existingCart = await Cart.findOne({ userId: userId });
  
      if (existingCart) {
        // Update existing cart, including modifiedAt for cart and items
        existingCart.item = cart.item.map(item => ({...item, modifiedAt: new Date()})); // Update modifiedAt for each item
        existingCart.modifiedAt = new Date();
        await existingCart.save();
      } else {
        // Create a new cart, including modifiedAt
        const newCart = new Cart({ 
          userId: userId, 
          item: cart.item.map(item => ({...item, modifiedAt: new Date()})),
          modifiedAt: new Date()
        });
        await newCart.save();
      }
  
      return NextResponse.json({ message: 'Cart saved successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error saving cart:', error);
      return NextResponse.json({ message: 'Error saving cart' }, { status: 500 });
    }
  }
  
  export async function DELETE(req) {
    try {
      const url = new URL(req.url);
      const userId = url.searchParams.get('userId');
  
      if (!userId) {
        return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
      }
  
      const deletedCart = await Cart.findOneAndDelete({ userId: userId });
  
      if (!deletedCart) {
        return NextResponse.json({ message: 'Cart not found' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Cart deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting cart:', error);
      return NextResponse.json({ message: 'Error deleting cart' }, { status: 500 });
    }
  }