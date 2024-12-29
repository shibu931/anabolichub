import ArticlePage from '@/components/Common/ArticlePage'
import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ProductLayout from '@/components/ProductPage/ProductLayout'


const page = async ({ params }) => {
    const {productSlug} = await params

    const productData = await fetch(`${process.env.DOMAIN_URL}/api/products/${productSlug}`)
    const articleData = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${productSlug}`)
    const { product } = await productData.json();
    const {article} = await articleData.json()
    

    return (
        <main className='container mx-auto mt-5 px-4 lg:px-10'>
            <Breadcrumbs slug={product?.subCategory} endSlug={product?.productName} />

            <ProductLayout product={product}/>
            <div className="mt-5">
                {
                    article && <ArticlePage article={article}/>
                }
            </div>
        </main>
    )
}

export default page