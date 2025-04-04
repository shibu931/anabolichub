import { NextResponse } from 'next/server';
import connectToDb from '@/utils/dbConnect'; 
import Product from '@/models/products'; 

connectToDb();
export async function POST(req) {
    try {
  
      const { productIds } = await req.json(); 
  
      if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return NextResponse.json({ message: 'Product IDs are required.' }, { status: 400 });
      }
  
      const relatedProducts = await Product.find({ productId: { $in: productIds } });
      console.log("Related ",relatedProducts);
      
      return NextResponse.json(relatedProducts, { status: 200 });
    } catch (error) {
      console.error('Error fetching related products:', error);
      return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
  }