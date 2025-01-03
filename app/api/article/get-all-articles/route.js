import connectToDB from '@/utils/dbConnect';
import { NextResponse } from 'next/server';
import Article from '@/models/article';

connectToDB();

export async function GET(req) {
  const urlParams = new URLSearchParams(req.url.slice(1));

  const page = parseInt(urlParams.get('page') || 1); 
  const limit = parseInt(urlParams.get('limit') || 10);
  const searchQuery = urlParams.get('search');

  try {
    const query = {};

    if (searchQuery) {
      query.$text = { $search: searchQuery };
    }

    const skip = (page - 1) * limit;

    const articles = await Article.find(query, 'title slug _id')
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit);

    const totalArticles = await Article.countDocuments(query);
    const totalPages = Math.ceil(totalArticles / limit);

    if (!articles.length) {
      return NextResponse.json({ success: false, message: 'No articles found' }, { status: 204 });
    }

    const formattedArticles = articles.map(article => ({
      id: article._id.toString(),
      title: article.title,
      slug: article.slug,
    }));

    return NextResponse.json({
      success: true,
      articles: formattedArticles,
      totalPages,
      currentPage:page
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}