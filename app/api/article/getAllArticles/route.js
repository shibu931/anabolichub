import connectToDB from '@/utils/dbConnect'
import { NextResponse } from 'next/server';
import Article from '@/models/article'

connectToDB()
export async function GET(){
    try {
        const articles = await Article.find({}, 'title slug _id'); // _id is the MongoDB ID

        if (!articles) {
            return NextResponse.json({ success: false, message: 'No articles found' }, { status: 404 });
        }

        // Map the result to a cleaner format (optional, but recommended)
        const formattedArticles = articles.map(article => ({
            id: article._id.toString(), // Convert ObjectId to string
            title: article.title,
            slug: article.slug,
        }));

        return NextResponse.json({ success: true, data: formattedArticles }, { status: 200 });
    } catch (error) {
        console.error("Error fetching articles:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // 500 for server errors
    }
}