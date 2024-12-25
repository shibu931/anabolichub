'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CheckoutIcon } from '../Icons/Icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
import DialogBox from '@/components/Common/DialogBox'
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast"
import {redirect} from 'next/navigation'

const ProductCard = ({ product }) => {
  const { toast } = useToast()
  const { addToCart} = useCart();
  const [quantity, setQuantity] = useState(1)
  function handleAddToCart() {
    if (quantity >= 1) {
      const item = {
        product: product?.productId,
        name: product?.productName,
        image: product?.productImage[0].thumb,
        price: product?.productPrice,
        quantity: quantity,
        slug: product?.slug
      }
      addToCart(item)
      toast({
        className:'bg-primary text-base-100',
        title: "Product Added to Cart",
        description: "Product added to cart"
      })
    } else {
      toast({
        className:'bg-primary text-base-100',
        title: "Something Went Wrong!",
        description: "Product adding to cart failed"
      })
    }
  }
  function quickCheckout(){
    handleAddToCart()
    redirect('/checkout')
  }
  const changeQuantity = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className='product-card'>
      {product?.info && (
        <span className="indicator-item badge badge-primary font-semibold !rounded-none !-translate-x-1 !translate-y-1">
          {product?.info}
        </span>
      )}
      <div className="w-full product-img-card overflow-hidden">
        <Link href={`/product/${product?.slug}`}>
          <Image
            src={product?.productImage[0].thumb}
            width={200}
            height={300}
            alt={product?.productName}
            className='w-full h-full object-cover'
          />
        </Link>
      </div>
      {product?.brandLink && (
        <Link
          href={product?.brandLink}
          className="block text-center text-sm text-primary mt-1 font-semibold hover:underline"
        >
          {product?.brandName || 'Unknown Brand'}
        </Link>
      )}
      <Link title={product?.productName} href={`/product/${product?.slug}`} className='mt-1 text-center text-base-content block text-xs '>{product?.category.title}</Link>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <h6 className='text-center text-sm font-bold text-nowrap overflow-hidden overflow-ellipsis px-2'><Link href={`/product/${product?.slug}`}>{product?.productName}</Link></h6>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <span className="block text-xs italic text-center font-medium text-green-700">{product?.productPrice}€ <small className='line-through text-red-700'>{product?.productPricePerMg}</small></span>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <div className="flex justify-center my-3">
        <div className="border flex border-neutral rounded-badge overflow-hidden">
          <div className='bg-white flex ms-2 me-1 justify-center items-center'>
            <input type="text" className='border-none w-[18px] pe-0 text-sm font-medium focus:outline-none' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <button className='bg-neutral hover:bg-primary' onClick={() => changeQuantity('increase')} aria-label='Increase Quantity'>
              <ChevronUp className='text-white w-[22px] h-[16px]' />
            </button>
            <button className='bg-neutral hover:bg-primary disabled:hover:bg-neutral/75 disabled:bg-neutral/75' onClick={() => changeQuantity('decrease')} disabled={quantity <= 1}>
              <ChevronDown className='text-white w-[22px] h-[16px]' aria-label='Decrease Quantity' />
            </button>
          </div>
          <div className="bg-neutral hover:bg-primary px-2 py-1">
            <button type='button' className='text-xs font-semibold text-white  h-full' aria-label='Add to cart' onClick={() => handleAddToCart()}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <div className="flex flex-wrap justify-between">
        <button type='button' aria-label="Checkout" onClick={()=>quickCheckout()} className='text-[0.65rem] text-left hover:text-primary flex font-semibold mb-1'><CheckoutIcon className={'w-4 me-1'} /> Quick Checkout</button>
        <DialogBox />
      </div>
    </div>
  )
}

export default ProductCard