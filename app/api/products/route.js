import { NextResponse } from "next/server";
import Product from '../../../models/products'
import dbConnect from '../../../utils/dbConnect'

dbConnect();

export async function GET(req, res) {
    try {

        const url = req.url;
        const urlParams = new URL(url).searchParams;
        const type = urlParams.get('type');
        const limit = urlParams.get('limit');
        const category = urlParams.get('category');
        const subCategory = urlParams.get('subCategory');

        // const { type, category, subCategory, limit = 10 } = req.searchParams;

        let query = {};
        let sort = {};

        if (type === "latest") {
            sort = { createdAt: -1 }; // Sort by latest products
        } else if (type === "best-selling") {
            sort = { sales: -1 }; // Sort by sales for best-selling
        } else if (type === "category") {
            if (!category) return NextResponse.json({ status: 400, message: "Category is required" });
            query["category.href"] = category;
        } else if (type === "sub-category") {
            if (!subCategory) return NextResponse.json({ status: 400, message: "Sub-category is required" });
            query["subCategory"] = {
                $elemMatch: { href: subCategory },
            };
        }

        const products = await Product.find(query)
            .sort(sort)
            .limit(parseInt(limit));

        if(products.length ==0) return NextResponse.json({ status: 204, message : "No Products Found" });

        return NextResponse.json({ status: 200, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ message: 500, status: "Failed to fetch data" });
    }
}


