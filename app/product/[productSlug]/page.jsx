import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ProductLayout from '@/components/ProductPage/ProductLayout'
import Head from 'next/head'

async function getProduct(productSlug) {
    const productData = await fetch(`${process.env.DOMAIN_URL}/api/products/${productSlug}`)
    return productData.json()
}

async function getArticle(slug) {
    const data = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${slug}`)
    return data.json()
}

export async function generateMetadata({ params }) {
    const {productSlug} = await params
    const { product } = await getProduct(productSlug);
    console.log("Product ",product);
    
    const title = `${product.productName} - ${product.brandName}`;
    const description = product.description;
    const imageUrl = product.productImage[0]?.large || product.productImage[0]?.thumb || '/default-og-image.jpg';
    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: imageUrl,
                    alt: product.productName,
                },
            ],
            type: 'website',
            url: new URL(`/products/${product.slug}`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
            'product:availability': "In Stock",
            'product:price:amount': product.productPrice.replace(/[$,]/g, ''),
            'product:price:currency': product.productPrice.replace(/[^$]/g, ''),
            'product:brand': product.brandName,
            'product:category': product.category.title,
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [imageUrl],
        },
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
        alternates: {
            canonical: `/product/${product.slug}`,
        }
    };
}

const page = async ({ params }) => {
    const {productSlug} = await params
    const { product } = await getProduct(productSlug);
    const { article } = await getArticle(productSlug)
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.productName,
        image: product.productImage[0]?.large || product.productImage[0]?.thumb || new URL('/default-image.jpg', process.env.NEXT_PUBLIC_BASE_URL).toString(),
        description: product.description,
        sku: product.productId,
        brand: {
            "@type": "Brand",
            name: product.brandName
        },
        offers: {
            "@type": "Offer",
            url: new URL(`/product/${product.slug}`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
            priceCurrency: product.productPrice.replace(/[^$]/g, ''),
            price: product.productPrice.replace(/[$,]/g, ''),
            availability: "https://schema.org/InStock",
        }
    };
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product?.productName,
        description: product?.description,
        image: product.productImage[0]?.large,
        brand: {
            "@type": "Brand",
            "name": "AnabolicHub"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "5000"
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
            </Head>
            <main className='container xl:w-[1280px] mx-auto mt-5 px-4 lg:px-10'>
                <Breadcrumbs slug={product?.subCategory} endSlug={product?.productName} />

                <ProductLayout product={product} article={article ? article.content : null}/>
            </main>
        </>
    )
}

export default page