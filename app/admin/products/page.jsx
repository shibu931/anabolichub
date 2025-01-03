'use client';
import Loading from '@/components/Common/Loading';
import GenericList from '@/components/Dashboard/GenericList';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const fetchProducts = async () => {
    const urlParams = new URLSearchParams({
      type: 'latest',
      page,
      search: debouncedSearchQuery,
    });

    try {
      setLoading(true)
      const response = await fetch(`/api/products?${urlParams.toString()}`);
      if (!response.ok) {
        console.error("Error fetching data:", response.status, await response.text())
      }
      const data = await response.json();

      if (data.status === 204) {
        console.log("Error: ", data.message);
        setProducts([])
        setTotalPages(0)
      } else {
        const { products, totalPages, currentPage } = data;
        setPage(currentPage);
        setProducts(products);
        setTotalPages(totalPages);
      }
    } catch (error) {
      setError(error);
      setLoading(false)
      setProducts([])
    } finally {
      setLoading(false)
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/products?Id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      setProducts(products.filter(product => product.id !== id));
      alert("Product deleted!")
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Error deleting product!")
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [page, debouncedSearchQuery]);

  return (
    <>
      <GenericList data={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery} error={error} loading={loading}
        itemName="Product"
        editPath="/admin/products/editor"
        handleDelete={handleDelete}
      />
      <div className='w-full'>
        {totalPages && (
          <div className="join my-4 lg:my-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`join-item btn btn-square ${page === pageNumber ? 'btn-active' : ''}`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;