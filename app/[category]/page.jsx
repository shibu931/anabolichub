import Breadcrumbs from '../../components/Common/Breadcrumbs'
import CatalogPage from '../../components/Common/CatalogPage'

const page = async ({params}) => {
  const {category} = await params
  const data = await fetch(`http://localhost:3000/api/products/${category}?type=category`)
  const articleData = await fetch(`${process.env.DOMAIN_URL}/api/article?slug=${category}`)
  const {article} = await articleData.json()
  const {product} = await data.json()

  return (
    <div className='container mx-auto mt-4 px-4 lg:px-0'>
      <Breadcrumbs />
    
      <CatalogPage product={product} article={article}/>

    </div>
  )
}

export default page