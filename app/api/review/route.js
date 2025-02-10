import { NextResponse } from "next/server";
import connectToDB from '@/utils/dbConnect'
import Reviews from '@/models/reviews'

connectToDB()
export async function GET(req) {
    try {
        const url = req.url;
        const urlParams = new URL(url).searchParams;
        const productId = urlParams.get('productId');
        const slug = urlParams.get('slug');
        const limit = parseInt(urlParams.get('limit') || 10);
        const page = parseInt(urlParams.get('page') || 1);

        const skip = (page - 1) * limit;

        let reviewDoc;
        let totalReviews = 0; 

        if (productId) { 
            reviewDoc = await Reviews.find({ productID: productId });
            if (reviewDoc && reviewDoc.length > 0) { 
                totalReviews = reviewDoc.reduce((sum, doc) => sum + doc.reviews.length, 0)
            }
        } else {
            reviewDoc = await Reviews.find();
            if (reviewDoc) {
                totalReviews = reviewDoc.reduce((sum, doc) => sum + doc.reviews.length, 0)
            }
        }

        if (!reviewDoc || (Array.isArray(reviewDoc) && reviewDoc.length === 0) || (reviewDoc && !Array.isArray(reviewDoc) && reviewDoc.reviews.length === 0)) {
            return NextResponse.json({
                status: 204,
                message: 'No reviews found',
                reviews:[],
                ok: false,
            });
        }

        const totalPages = Math.ceil(totalReviews / limit);
        let reviews = [];

        if (Array.isArray(reviewDoc)) {
            for (const doc of reviewDoc) {
                reviews.push(doc)
            }
        } else {
            reviews = reviewDoc.reviews
        }

        reviews = reviews.slice(skip, skip + limit);

        return NextResponse.json({
            status: 200,
            reviews,
            totalPages,
            currentPage: page,
            totalReviews,
            ok: true,
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json({
            status: 500,
            message: 'Failed to fetch reviews',
            error: error.message,
            ok: false,
        });
    }
}


export async function POST(req) {
    try {
        const { productId, slug, review } = await req.json()
        if (!review || !review.customerName || !review.customerEmail || !review.comments) {
            return NextResponse.json({ message: 'Missing Required Fields' }, { status: 400 });
        }

        if (review.rating < 1 || review.rating > 5) {
            return NextResponse.json({ message: 'Rating must be between 1 and 6' }, { status: 400 })
        }

        let existingReview = await Reviews.findOne({ productID: productId });

        if (existingReview) {
            existingReview.reviews.push(review);
        } else {
            existingReview = new Reviews({
                productID: productId,
                slug: slug,
                reviews: [review],
            })
        }

        await existingReview.save();
        return NextResponse.json({ message: 'Review Submitted Successfully' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to submit Review' }, { satuts: 500 })
    }
}