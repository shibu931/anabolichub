'use client';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import InformationBar from '@/components/Common/InformationBar'
import { useAuth } from '@clerk/nextjs'
import { useCart } from '@/context/CartContext';


export default function page(){
    return(
        <Suspense>
            <ViewOrderDetails/>
        </Suspense>
    )
}

export function ViewOrderDetails() {
    const { isLoaded, userId } = useAuth()
    if(!userId && isLoaded) redirect('/login')
    
    const {clearCart} = useCart()
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const checkout = searchParams.get('checkout') || null;
    useEffect(() => {
        if (checkout) {
            clearCart();
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete('checkout');
            replace(pathname + '?' + newSearchParams.toString());
        }
    }, [checkout, clearCart]);
    
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formattedDate, setFormattedDate] = useState(null)

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
                    setOrderDetails(data.order); //
                    setFormattedDate(new Date(data.order.createdAt).toLocaleDateString())
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

    if (!orderId) {
        return <p className='text-center my-5'>Order ID is missing.</p>;
    }

    if (loading) {
        return <p className='text-center my-5'>Loading order details...</p>;
    }

    if (error) {
        return <p className='text-center my-5'>{error}</p>;
    }

    if (!orderDetails) {
        return <p className='text-center my-5'>Order Not found</p>
    }

    return (
        <div className="container mx-auto mt-5 px-4 lg:px-0">

            {
                orderDetails.paymentStatus === 'pending' ? <InformationBar className={'bg-primary'} text={'Our customer advisor will send you bank details for payment within 2 hours of placing order. Your order will only confirm after successfull payment.'} /> : ''
            }
            <div className="rounded-lg shadow-md overflow-hidden bg-white p-6 md:p-8 lg:p-10">
                <div className="border-b border-gray-200 pb-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">Order Details</h2>
                    <p className="text-sm text-gray-500 mt-1">Order ID: {orderDetails.orderId} | Placed on: {formattedDate}</p>
                </div>

                <div className="md:flex md:space-x-12 mb-8"> {/* Flex container for address and status */}
                    <div className="md:w-1/2"> {/* Shipping Address - takes half width on medium screens */}
                        <h3 className="text-lg font-medium text-gray-800 mb-3">Shipping Address</h3>
                        <ul className="text-gray-600 space-y-1">
                            <li><strong>Name:</strong> {orderDetails.shippingAddress.name}</li>
                            <li><strong>Email:</strong> {orderDetails.shippingAddress.email}</li>
                            <li><strong>Phone:</strong> {orderDetails.shippingAddress.phone}</li>
                            <li><strong>Address:</strong> {orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country} {orderDetails.shippingAddress.zipCode}</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0"> {/* Order Status - takes half width on medium screens */}
                        <h3 className="text-lg font-medium text-gray-800 mb-3">Order Status</h3>
                        <div className="text-gray-600 space-y-1">
                            <p>Payment Status: <span className={`font-medium ${orderDetails.paymentStatus === 'paid' ? 'text-green-500' : orderDetails.paymentStatus === 'failed' ? 'text-red-500' : 'text-yellow-500'}`}>{orderDetails.paymentStatus}</span></p>
                            <p>Shipping Status: {orderDetails.shippingStatus}</p>
                            <p>Order Status: {orderDetails.orderStatus}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Order Items</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-50 text-gray-700">
                                    <th className="px-4 py-3 border border-gray-300 text-left font-medium">Product</th>
                                    <th className="px-4 py-3 border border-gray-300 text-left font-medium">Quantity</th>
                                    <th className="px-4 py-3 border border-gray-300 text-right font-medium">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.products.map((product) => (
                                    <tr key={product._id} className="border-b border-gray-300">
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">
                                            <Link href={`/products/${product.slug}`} className="hover:underline text-blue-500">
                                                {product.productName}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300">{product.quantity}</td>
                                        <td className="px-4 py-3 text-gray-700 border border-gray-300 text-right">€{product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="md:flex md:justify-end"> {/* Align total to the right */}
                        <div className="md:w-1/2 md:text-right">
                            <p className="text-xl font-semibold text-gray-800 mb-2">Total: €{orderDetails.finalAmount.toFixed(2)}</p>
                            <div className="text-gray-600 space-y-1">
                                <p className="mb-1">Subtotal: €{orderDetails.totalAmount.toFixed(2)}</p>
                                <p className="mb-1">Discount: €{orderDetails.discount.toFixed(2)}</p>
                                <p>Delivery Charge: €{orderDetails.deliverCharge.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}