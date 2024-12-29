'use client'
import React, { useEffect, useState } from 'react'
import GenericList from '@/components/Dashboard/GenericList '

const page = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const res = await fetch('/api/orders/get-all-orders');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setOrders(data.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchOrders();
    }, []);
  
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
  
    if (loading) return <div>Loading orders...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <GenericList
    data={orders}
    itemName="Order"
    editPath="/admin/orders/editor"
    handleDelete={(id) => handleDelete(id)}
  />
  )
}

export default page