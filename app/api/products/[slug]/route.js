import { NextResponse } from "next/server";
import dbConnect from '../../../../utils/dbConnect'
import Product from '../../../../models/products'

dbConnect();
export async function GET(req,{params}){
    const url = req.url;
    const urlParams = new URL(url).searchParams;
    const type = urlParams.get("type")
    const {slug} = await params;
    let query ={}
    try {
        let product
        if(type==='category'){
            query["category.href"] = slug
            product = await Product.find(query)
        }else if(type === 'sub-category'){
            query["subCategory"] = { $elemMatch: { href: slug } };
            product = await Product.find(query)
        }else{
            product = await Product.findOne({slug:slug});
        }
        
        if(product.length == 0){
            return NextResponse.json({status:204, message:"No Product Found"})
        }
        return NextResponse.json({status:200, product})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({status:500, message:"Something went wrong"})
    }
}