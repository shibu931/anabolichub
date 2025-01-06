import CatalogPage from '../../../components/Common/CatalogPage'
import Breadcrumbs from '../../../components/Common/Breadcrumbs'

async function getProducts(subCategory) {
  const data = await fetch(`http://localhost:3000/api/products/${subCategory}?type=sub-category`)
  return data.json()
}

async function getArticle(subCategory) {
  const articleData = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${subCategory}`)
  return articleData.json()
}

export async function generateMetadata({ params }) {
  const { article } = await getArticle(params.subCategory)
  const productData = await getProducts(params.subCategory)
  const keywordsArray = article.keywords.split(',').map(keyword => keyword.trim());
  if (!productData || !productData.product || productData.product.length === 0) {
    return {
      title: 'Products Not Found',
      description: 'No products found in this category.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

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

async function MyComponent({params}) {
  const { article } = await getArticle(params.subCategory)
  const { product } = await getProducts(params.subCategory)
  return (
    <main className='container xl:w-[1280px] mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs/>
      <CatalogPage product={product} article={article}/>
    </main>
  );
}

export default MyComponent;