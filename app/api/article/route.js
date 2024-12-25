import connectToDB from '@/utils/dbConnect'
import { NextResponse } from 'next/server';
import Article from '@/models/article'

connectToDB();
export async function GET(req) {
    try {
        const url = new URL(req.url);
        const slug = url.searchParams.get('slug');
        if (!slug) {
            return NextResponse.json({ message: 'slug is required' }, { status: 400 });
        }
        const article = await Article.findOne({ slug });
        if (!article) {
            return NextResponse.json({ message: 'No article found', article: null }, { status: 200 });
        }
        
        return NextResponse.json({ article }, { status: 200 });
    } catch (error) {
        console.error("Error fetching content:", error);
        return NextResponse.json({ message: 'Error fetching article', article: null }, { status: 500 })
    }
}

export async function POST(req) {
    try {
        const data = await req.json()
        const article = await Article.create(data);
        return NextResponse.json({ success: true, data: article }, { status: 201 });
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
        const Id = url.searchParams.get('Id');
        const data = await req.json()
        if (!Id) {
            return NextResponse.json({ message: 'Article Id is required' }, { status: 400 });
        }
        const article = await Article.findByIdAndUpdate(Id, data, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validators
        });
        if (!article) {
            return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: article }, { status: 200 });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.slug === 1) {
            return NextResponse.json({ success: false, error: 'Slug already exists.' }, { status: 400 });
        } else {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const Id = url.searchParams.get('Id');
        const deletedArticle = await Article.findByIdAndDelete(Id);
        if (!deletedArticle) {
            return NextResponse.json({ success: false, message: 'Article not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} }, { status: 200 });
    } catch (error) {
        console.error("Error deleteing article:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}