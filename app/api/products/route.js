import { NextResponse } from "next/server";
import Product from '../../../models/products';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export async function GET(req) {
    try {
        const url = req.url;
        const urlParams = new URL(url).searchParams;
        const type = urlParams.get('type');
        const limit = parseInt(urlParams.get('limit') || 10);
        const page = parseInt(urlParams.get('page') || 1);
        const category = urlParams.get('category');
        const subCategory = urlParams.get('subCategory');
        const search = urlParams.get('search'); // Get the search query

        const skip = (page - 1) * limit;

        let query = {};
        let sort = {};

        if (type === "latest") {
            sort = { createdAt: -1 };
        } else if (type === "best-selling") {
            sort = { sales: -1 };
        } else if (type === "category") {
            if (!category) return NextResponse.json({ status: 400, message: "Category is required" });
            query["category.href"] = category;
        } else if (type === "sub-category") {
            if (!subCategory) return NextResponse.json({ status: 400, message: "Sub-category is required" });
            query["subCategory"] = {
                $elemMatch: { href: subCategory },
            };
        }

        if (search) {
            query.$or = [
                { productName: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                // Add other fields as needed for searching
                { "category.name": { $regex: search, $options: 'i' } },
                {"subCategory.name": {$regex: search, $options: 'i'}}
            ];
        }

        const products = await Product.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);

        if (products.length === 0) return NextResponse.json({ status: 204, message: "No Products Found", ok:false });

        return NextResponse.json({ status: 200, products, totalPages, currentPage: page });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ status: 500, message: "Failed to fetch data", error: error.message });
    }
}

export async function POST(req) {
    try {
        const data = await req.json()
        const product = await Product.create(data);
        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error) {
        console.error("Error creating content:", error);
        if (error.code === 11000 && error.keyPattern && error.keyPattern.slug === 1) {
            return NextResponse.json({ success: false, error: 'Slug already exists.' }, { status: 400 });
        } else {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
    }
}

export async function PUT(req) {
    try {
        const url = new URL(req.url);
        const slug = url.searchParams.get('slug');
        const data = await req.json()
        if (!slug) {
            return NextResponse.json({ message: 'Product Slug is required' }, { status: 400 });
        }
        const product = await Product.findOneAndUpdate({ slug }, { $set: data }, { new: true, runValidators: true });
        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product }, { status: 200 });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.slug === 1) {
            return NextResponse.json({ success: false, error: 'Slug already exists.' }, { status: 400 });
        } else {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
    }
}