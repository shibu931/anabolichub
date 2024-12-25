import CatalogPage from '../../../components/Common/CatalogPage'
import Breadcrumbs from '../../../components/Common/Breadcrumbs'

async function MyComponent({params}) {
  const {subCategory} = await params
  const data = await fetch(`http://localhost:3000/api/products/${subCategory}?type=sub-category`)
  const articleData = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${category}`)
  const {article} = await articleData.json()
  const {product} = await data.json()
  return (
    <div className='container mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs/>
      <CatalogPage product={product} article={article}/>
    </div>
  );
}

export default MyComponent;