'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setOrderDetails((prevOrderDetails) => {
      if (name.startsWith('products.')) {
        const productIndex = parseInt(name.split('.')[1]);
        return {
          ...prevOrderDetails,
          products: prevOrderDetails.products.map((product, i) =>
            i === productIndex ? { ...product, quantity: value } : product
          ),
        };
      } else if (name.startsWith('shippingAddress.')) {
        const addressField = name.split('.')[1];
        return {
          ...prevOrderDetails,
          shippingAddress: { ...prevOrderDetails.shippingAddress, [addressField]: value },
        };
      } else {
        return { ...prevOrderDetails, [name]: value };
      }
    });
  };

  useEffect(() => {
    if (orderId) {
      const fetchOrderDetails = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`/api/orders/get-single-order?orderId=${orderId}`);
          if (!res.ok) {
            const errorData = await res.json()
            throw new Error(`API returned an error: ${res.status} - ${JSON.stringify(errorData)}`);
          }
          const data = await res.json();
          setOrderDetails(data.order);
        } catch (err) {
          console.error("Error fetching order details:", err);
          setError("Failed to fetch order details.");
        } finally {
          setLoading(false);
        }
      };

      fetchOrderDetails();
    }
  }, [orderId]);


  // Function to save changes (you would need to implement the actual API call here)
  const updateOrderDetails = async () => {
    setLoading(true);
    try {
        const res = await fetch(`/api/orders?orderId=${orderDetails.orderId}`, {
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
        }

        alert(`Order Updated`);
        setIsEdit(false)
    } catch (err) {
        console.error("Error updating order:", err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
    setIsEdit(false);
  };

  if (!orderId) return <p className='text-center my-5'>Order ID is missing.</p>;
  if (loading) return <p className='text-center my-5'>Loading order details...</p>;
  if (error) return <p className='text-center my-5'>{error}</p>;
  if (!orderDetails) return <p className='text-center my-5'>Order Not found</p>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="mb-4 col-span-3">
            <p className='text-lg bg-green-100 py-2 px-2 border border-green-300 rounded font-semibold'>Order ID: {orderDetails.orderId}</p>
          </div>

          {["name", "email", "phone", "address", "city", "country", "zipCode"].map((field) => (
            <div key={`shippingAddress.${field}`} className="mb-4">
              <label htmlFor={`shippingAddress.${field}`} className="block text-gray-700 font-bold mb-2">
                {field.replace(/([A-Z])/g, ' $1').trim().toUpperCase()} {/* Format label */}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                id={`shippingAddress.${field}`}
                name={`shippingAddress.${field}`}
                value={orderDetails.shippingAddress?.[field] || ""}
                onChange={isEdit ? handleInputChange : null}
                className={`border focus:ring-purple-300 px-3 py-2 w-full focus:outline-none focus:ring-2 ${isEdit ? 'border-gray-300' : 'bg-gray-100 border-gray-300 cursor-not-allowed'}`}
                readOnly={!isEdit}
              />
            </div>
          ))}

          {orderDetails.products && orderDetails.products.length > 0 && (
            <div className="mb-4 col-span-3">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <div className="overflow-x-auto rounded border border-gray-300">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderDetails.products.map((product, index) => (
                      <tr key={product.productId}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.productName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <input
                            type="number"
                            name={`products.${index}.quantity`}
                            value={product.quantity}
                            onChange={(event) => handleInputChange(event, index)}
                            disabled={!isEdit}
                            className={`border focus:ring-purple-300 px-3 py-2 w-20 focus:outline-none focus:ring-2 ${isEdit ? 'border-gray-300' : 'bg-gray-100 border-gray-300 cursor-not-allowed'}`}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Other fields */}
          {["totalAmount", "deliverCharge", "finalAmount"].map((fieldName) => (
            <div key={fieldName} className="mb-4">
              <label htmlFor={fieldName} className="block text-gray-700 font-bold mb-2">
                {fieldName.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
              </label>
              <input
                type="number"
                id={fieldName}
                name={fieldName}
                value={orderDetails[fieldName]}
                onChange={isEdit ? handleInputChange : null}
                className={`border focus:ring-purple-300 px-3 py-2 w-full focus:outline-none focus:ring-2 ${isEdit ? 'border-gray-300' : 'bg-gray-100 border-gray-300 cursor-not-allowed'}`}
                readOnly={!isEdit}
              />
            </div>
          ))}

          {["paymentStatus", "shippingStatus", "orderStatus"].map((fieldName) => (
            <div key={fieldName} className="mb-4">
              <label htmlFor={fieldName} className="block text-gray-700 font-bold mb-2">
                {fieldName.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <select
                id={fieldName}
                name={fieldName}
                value={orderDetails[fieldName]}
                onChange={isEdit ? handleInputChange : null}
                disabled={!isEdit}
                className={`border focus:ring-purple-300 px-3 py-2 w-full focus:outline-none focus:ring-2 ${isEdit ? 'border-gray-300' : 'bg-gray-100 border-gray-300 cursor-not-allowed'}`}
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="canceled">Canceled</option>
                <option value="returned">Returned</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          ))}

          <div className="md:col-span-3 flex justify-end">

            {
              isEdit ? <button
                onClick={() => setIsEdit(!isEdit)}
                className={`px-4 py-2 text-gray-100 rounded bg-red-700 me-2`}
              >
                Cancel
              </button>
                :
                <button
                  onClick={() => setIsEdit(!isEdit)}
                  className="px-4 py-2 text-gray-100 rounded bg-purple-900"
                >
                  Update Order
                </button>
            }
            {isEdit && (
              <button
                type="button"
                onClick={() => {
                  updateOrderDetails()
                  setIsEdit(false);
                }}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page