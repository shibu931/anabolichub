'use client'
import React, { useState, useEffect } from 'react';
import CatalogSidebar from './CatalogSidebar';
import ProductCard from './ProductCard';
import ArticlePage from './ArticlePage';

const CatalogPage = ({ product,article }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products to display per page

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(product?.length / productsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect to reset page to 1 if products change (e.g. filter applied)
  useEffect(() => {
    setCurrentPage(1);
  }, [product]);

  return (
    <div className="grid grid-cols-10 gap-4 lg:gap-x-6">
      <div className="col-span-10 lg:col-span-2 py-5">
        <CatalogSidebar />
      </div>
      <div className="col-span-10 lg:col-span-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {currentProducts?.map((item, index) => (
            <ProductCard product={item} key={item._id || index} /> // Use a unique key if available
          ))}
        </div>
        {product ? '': <p className='text-2xl text-error font-semibold text-center'>No products found.</p>}

        {/* Pagination */}
        {product?.length > productsPerPage && (
          <div className="join my-4 lg:my-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`join-item btn btn-square ${currentPage === pageNumber ? 'btn-active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}

        <hr className='my-5'/>
        <div>
        {
          article && <ArticlePage content={article.content}/>
        }
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;