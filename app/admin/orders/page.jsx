'use client'
import React, { useEffect, useState } from 'react'
import GenericList from '@/components/Dashboard/GenericList'

const page = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const fetchOrders = async () => {
    const urlParams = new URLSearchParams({
      page,
      search: debouncedSearchQuery,
    });

    try {
      setLoading(true);
      const response = await fetch(`/api/orders/get-all-orders?${urlParams.toString()}`);

      if (!response.ok) {
        console.error("Error fetching orders:", response.status, await response.text());
      }
      const data = await response.json();
      if (data.status === 204) {
        console.log("No orders found");
        setOrders([]);
        setTotalPages(0);
        return;
      } else {
        const { orders, totalPages, currentPage } = data;
        setOrders(orders);
        setTotalPages(totalPages);
        setPage(currentPage);
        setError(null)
      }

    } catch (error) {
      console.error("Error during fetch:", error);
      setError("A network error occurred."); // Set error for UI display
      setOrders([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    fetchOrders();
  }, [page, debouncedSearchQuery]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/orders?orderId=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      setOrders(orders.filter(order => order.id !== id));
      alert("Article deleted!")
    } catch (err) {
      console.error("Error deleting order:", err);
      alert("Error deleting order!")
    }
  }
  return (
    <>
      <GenericList
        data={orders}
        loading={loading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        error={error}
        itemName="Order"
        editPath="/admin/orders/editor"
        handleDelete={(id) => handleDelete(id)}
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
  )
}

export default page