import { NextResponse } from 'next/server';
import connectToDb from '@/utils/dbConnect'; 
import Product from '@/models/products'; 

connectToDb();
export async function GET(req) {
  try {

    const url = new URL(req.url);
    const query = url.searchParams.get('q');

    if (!query) {
      return NextResponse.json({ products: [] }, { status: 200 }); // Return empty array if no query
    }

    // Perform the search using a case-insensitive regular expression
    const products = await Product.find({
      $or: [
        { productName: { $regex: new RegExp(query, 'i') } }, // Search by name (case-insensitive)
        { brandName: { $regex: new RegExp(query, 'i') } },
        { 'category.title': { $regex: new RegExp(query, 'i') } }, // Search in category title
        { 'subCategory.title': { $regex: new RegExp(query, 'i') } },
      ],
    });
    
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json({ message: 'Error searching products', products: [] }, { status: 500 }); // Return empty array on error
  }
}