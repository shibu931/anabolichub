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
  const { category } = params
  const { article } = await getArticle(category)
  const productData = await getProducts(category)

  if (!productData || !productData.product || productData.product.length === 0) {
    return {
      title: 'Keine Produkte gefunden',
      description: 'In dieser Kategorie wurden keine Produkte gefunden.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
  const canonicalUrl = `/${category}`;
  const absoluteUrl = new URL(canonicalUrl, metadataBase).toString();

  if (!article) {
    const firstProduct = productData.product[0];
    return {
      title: `${category} Produkte`,
      description: `Entdecken Sie unsere Auswahl an ${category}-Produkten.`,
      metadataBase,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${category} Produkte`,
        description: `Durchstöbern Sie verschiedene Produkte in der Kategorie ${category}.`,
        url: absoluteUrl,
        type: 'website',
        images: firstProduct?.image
          ? [
              {
                url: firstProduct.image,
                alt: firstProduct.name || `${category} Produkt`,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${category} Produkte`,
        description: `Stöbern Sie in unserer ${category}-Produktkollektion.`,
        images: firstProduct?.image ? [firstProduct.image] : [],
      },
    };
  }

  const keywordsArray = article.keywords.split(',').map(keyword => keyword.trim());

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: keywordsArray.toString(),
    metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: absoluteUrl,
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
  }
}

const page = async ({ params }) => {
  const { category } = params
  const { article } = await getArticle(category)
  const { product } = await getProducts(category)
  
  return (
    <main className='container xl:w-[1280px] mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs />
      <CatalogPage product={product} article={article} />
    </main>
  )
}

export default page
