import Breadcrumbs from '../../components/Common/Breadcrumbs'
import CatalogPage from '../../components/Common/CatalogPage'

async function getProducts(category) {
  const data = await fetch(`http://localhost:3000/api/products/${category}?type=category`)
  return data.json()
}

async function getArticle(category) {
  const articleData = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${category}`)
  return articleData.json()
}

export async function generateMetadata({ params }) {
  const {category} = await params
  const { article } = await getArticle(category)
  const productData = await getProducts(category)
  if (!productData || !productData.product || productData.product.length === 0 ) {
    return {
      title: 'Products Not Found',
      description: 'No products found in this category.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  if(!article) return

  const keywordsArray = article.keywords.split(',').map(keyword => keyword.trim());
  return {
    title:article.metaTitle,
    description: article.metaDescription,
    keywords:keywordsArray.toString(),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: new URL(`/${article.slug}`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
      type: 'article',
      article: {
        publishedTime: article.createdAt,
        modifiedTime: article.updatedAt,
      },
      images: [
        {
          url: article.ogImage,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.ogImage],
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    alternates: {
      canonical: `/${article.slug}`,
    },
  }
}

const page = async ({ params }) => {
  const {category} = await params
  const { article } = await getArticle(category)
  const {product} = await getProducts(category)

  return (
    <main className='container xl:w-[1280px] mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs />

      <CatalogPage product={product} article={article} />

    </main>
  )
}

export default page