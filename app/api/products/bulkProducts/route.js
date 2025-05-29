import { NextResponse } from "next/server";
import dbConnect from '../../../../utils/dbConnect'
import Product from '../../../../models/products'

dbConnect();
export async function POST(req) {
    const body = await req.json();
    const { slugs } = body;
    try {
        if (!Array.isArray(slugs) || slugs.length === 0) {
            return Response.json({ success: false, message: 'Invalid or missing slugs array.' }, { status: 400 });
        }

        const products = await Product.find({ slug: { $in: slugs } });

        return Response.json({ success: true, products });
    } catch (error) {
        console.error('Error fetching products:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
