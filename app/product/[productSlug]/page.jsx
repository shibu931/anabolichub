import ArticlePage from '@/components/Common/ArticlePage'
import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ProductLayout from '@/components/ProductPage/ProductLayout'


const page = async ({ params }) => {
    const {productSlug} = await params

    const productData = await fetch(`${process.env.DOMAIN_URL}/api/products/${productSlug}`)
    const { product } = await productData.json();
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