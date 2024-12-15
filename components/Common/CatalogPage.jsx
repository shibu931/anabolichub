import React from 'react'
import CatalogSidebar from './CatalogSidebar'
import ProductCard from './ProductCard'
import ArticlePage from './ArticlePage'

const CatalogPage = () => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-2 py-5">
        <CatalogSidebar />
      </div>
      <div className="col-span-8 py-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <ProductCard key={index} />
            ))
          }
        </div>
        <div className="join my-4 lg:my-8 flex justify-center">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
        </div>
        <hr />

        {/* Content Page */}

        <ArticlePage/>

      </div>
    </div>
  )
}

export default CatalogPage