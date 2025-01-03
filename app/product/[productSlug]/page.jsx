import ArticlePage from '@/components/Common/ArticlePage'
import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ProductLayout from '@/components/ProductPage/ProductLayout'

async function getProduct(productSlug){
    const productData = await fetch(`${process.env.DOMAIN_URL}/api/products/${productSlug}`)
    return productData.json()
}

export async function generateMetadata({params}){
    const { product } = await getProduct(params.productSlug);
    const title = `${product.productName} - ${product.brandName}`;
    const description = product.shortDescription;
    const imageUrl = product.productImage[0]?.large || product.productImage[0]?.thumb || '/default-og-image.jpg'; 
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
            url: new URL(`/products/${product.slug}`, process.env.NEXT_PUBLIC_BASE_URL).toString(),
            priceCurrency: product.productPrice.replace(/[^$]/g, ''),
            price: product.productPrice.replace(/[$,]/g, ''),
            availability: "https://schema.org/InStock",
        }
    };
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
        },
        other: {
            'script': [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify(productSchema),
                },
            ],
        },
    };
}

const page = async ({ params }) => {
    const { product } = await getProduct(params.productSlug);
    return (
        <main className='container mx-auto mt-5 px-4 lg:px-10'>
            <Breadcrumbs slug={product?.subCategory} endSlug={product?.productName} />

            <ProductLayout product={product}/>
            <div className="mt-5">
                {
                    product?.description && <ArticlePage article={product?.description}/>
                }
            </div>
        </main>
    )
}

export default page