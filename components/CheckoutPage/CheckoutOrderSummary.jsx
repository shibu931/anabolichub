"use client"
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import React from 'react';

const CheckoutOrderSummary = () => {
  const { cart } = useCart();
  const calculateCartTotal = (cart) => {
    if (!cart || !cart.item || cart.item.length === 0) return 0;
    return cart.item.reduce((total, item) => {
        const convertPriceToNumber = (priceString) => {
            const cleanedString = priceString.replace(/[^\d,.-]/g, '');
            const normalizedString = cleanedString.replace(',', '.');
            const priceNumber = parseFloat(normalizedString);
            return priceNumber;
        };
        
        const price = convertPriceToNumber(item.price);
        return total + price * item.quantity;;
    }, 0);
};
  const productTotal = calculateCartTotal(cart)
  let deliveryCharges = 17.00
  let totalAmount = deliveryCharges + productTotal
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Abstrakt bestellen</h2>
      <ul className="divide-y divide-gray-300">
        {cart?.item?.map((item, index) => (
          <li key={index} className="py-4 flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium"><Link href={`/product/${item.slug}`}>{item.name}</Link></p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-medium">{item.price}</p>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-300 mt-4 pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Gesamtprodukt</span>
          <span>{productTotal.toFixed(2)}€</span>
        </div>
        {/* <div className="flex justify-between text-sm">
          <span>Coupon Discount</span>
          <span className='text-green-600'>-{couponDiscount.toFixed(2)}</span>
        </div> */}
        <div className="flex justify-between text-sm">
          <span>Liefergebühr</span>
          <span>{deliveryCharges.toFixed(2)}€</span>
        </div>
        <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-medium text-lg">
          <span>Pauschalbetrag</span>
          <span>{totalAmount.toFixed(2)}€</span>
        </div>
      </div>
    </div>
  )
};

export default CheckoutOrderSummary;
