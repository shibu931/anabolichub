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
  const { subCategory, category } = params
  const { article } = await getArticle(subCategory)
  const productData = await getProducts(subCategory)

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
  const canonicalUrl = `/${category}/${subCategory}`;
  const absoluteUrl = new URL(canonicalUrl, metadataBase).toString();

  if (!article) {
    const firstProduct = productData.product[0];
    return {
      title: `${subCategory} Produkte | ${category}`,
      description: `Durchsuchen Sie unsere Auswahl an ${subCategory}-Produkten in der Kategorie ${category}.`,
      metadataBase,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${subCategory} Produkte`,
        description: `Entdecken Sie hochwertige ${subCategory}-Artikel in der Kategorie ${category}.`,
        url: absoluteUrl,
        type: 'website',
        images: firstProduct?.image
          ? [
              {
                url: firstProduct.image,
                alt: firstProduct.name || `${subCategory} Produkt`,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${subCategory} Produkte`,
        description: `Entdecken Sie verschiedene ${subCategory}-Produkte.`,
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
      canonical: `/${category}/${subCategory}`,
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

async function MyComponent({ params }) {
  const { subCategory } = params;
  const { article } = await getArticle(subCategory)
  const { product } = await getProducts(subCategory)

  return (
    <main className='container xl:w-[1280px] mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs />
      <CatalogPage product={product} article={article} />
    </main>
  );
}

export default MyComponent;