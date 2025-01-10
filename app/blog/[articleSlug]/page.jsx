import ArticlePage from '@/components/Common/ArticlePage'
import TableOfContent from '@/components/Common/TableOfContent'

async function getData(slug) {
    const data = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${slug}`)
    return data.json()
}

export async function generateMetadata({ params }) {
    const {articleSlug} = await params
    const { article } = await getData(articleSlug)
    if (!article) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
            robots: {
                index: false,
                follow: false
            }
        };
    }

    const imageUrl = new URL(article.ogImage, process.env.NEXT_PUBLIC_BASE_URL).toString();

    const keywordsArray = article.keywords.split(',').map(keyword => keyword.trim());

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        image: imageUrl,
        datePublished: article.createdAt,
        dateModified: article.updatedAt,
        description: article.metaDescription,
        keywords: keywordsArray.join(","),
    };

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        keywords: keywordsArray.toString(),
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            url: new URL(`/content/${article.slug}`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
            type: 'article',
            article: {
                publishedTime: article.createdAt,
                modifiedTime: article.updatedAt,
            },
            images: [
                {
                    url: imageUrl,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.metaTitle,
            description: article.metaDescription,
            images: [imageUrl],
        },
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
        alternates: {
            canonical: `/content/${article.slug}`,
        },
        other: {
            'script': [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify(articleSchema),
                },
            ],
        },
    };
}

const page = async ({ params }) => {
    const {articleSlug} = await params
    const { article } = await getData(articleSlug)
    return (
        <div className='container xl:w-[1280px] mx-auto mt-5 px-4 lg:px-0'>
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-8">
                <aside className='col-span-2 h-auto relative'>
                    <TableOfContent content={article?.content}/>
                </aside>  
                <main className="col-span-6">
                    {article?.content ? <ArticlePage content={article.content} /> : <p className='my-16 text-2xl font-bold text-center'>No Article Found</p>}
                </main>
            </div>
        </div>
    )
}

export default page