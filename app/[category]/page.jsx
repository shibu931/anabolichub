import Breadcrumbs from '../../components/Common/Breadcrumbs'
import CatalogPage from '../../components/Common/CatalogPage'

const page = () => {
  return (
    <div className='container mx-auto mt-4'>
      <Breadcrumbs />

      <CatalogPage/>

    </div>
  )
}

export default page