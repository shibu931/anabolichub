'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CheckoutIcon, QuestionMarkIcon } from '../Icons/Icons'
import { ChevronDown, ChevronUp } from 'lucide-react'

const product = {
  productId:1,
  productName: 'AL Trenbolone Mix',
  productImage: 'https://steroidskaufen.com/416-home_default/anubis-boldenone-undecylenate-250-mg-10-ml.webp',
  productPrice: '50.00',
  productPricePerMg: '0.033',
  brandName: 'ASTERA LABS',
  brandLink: '/astera-labs',
  category: 'STEROIDS',
  subCategory: 'TRENBOLONE MIX',
  slug: '/steroids/trenbolone-mix/al-trenbolone-mix',
  info:'NEW'
}

const ProductCard = () => {
  const [quantity,setQuantity] = useState(1)
  const changeQuantity =(type)=>{ 
    if(type === 'increase'){
      setQuantity(quantity+1);
    }else{
      setQuantity(quantity-1)
    }
  }
  return (
    <div className='product-card'>
      {product.info && (
        <span className="indicator-item badge badge-primary font-semibold !rounded-none !-translate-x-1 !translate-y-1">
          {product.info}
        </span>
      )}
      <div className="w-full product-img-card overflow-hidden">
        <Link href={product.slug}>
        <Image
          src={product.productImage}
          width={200}
          height={300}
          alt={product.productName}
          className='w-full'
        />
        </Link>
      </div>
      {product.brandLink && (
        <Link
          href={product.brandLink}
          className="block text-center text-sm text-primary mt-1 font-semibold hover:underline"
        >
          {product.brandName || 'Unknown Brand'}
        </Link>
      )}
      <Link href={product.slug} className='text-center text-base-content block text-xs'>{product.productName}</Link>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <h6 className='text-center text-sm font-bold'><Link href={product.slug}>{product.subCategory}</Link></h6>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <span className="block text-xs italic text-center font-medium text-green-700">{product.productPrice}€ <small className='line-through text-red-700'>{product.productPricePerMg}</small></span>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <div className="flex justify-center my-3">
        <div className="border flex border-neutral rounded-badge overflow-hidden">
          <div className='bg-white flex ms-2 me-1 justify-center items-center'>
            <input type="text" className='border-none w-[18px] pe-0 text-sm font-medium focus:outline-none' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <button className='bg-neutral hover:bg-primary' onClick={()=>changeQuantity('increase')} aria-label='Increase Quantity'>
              <ChevronUp className='text-white w-[22px] h-[16px]' />
            </button>
            <button className='bg-neutral hover:bg-primary disabled:hover:bg-neutral/75 disabled:bg-neutral/75' onClick={()=>changeQuantity('decrease')} disabled={quantity <= 1}>
              <ChevronDown className='text-white w-[22px] h-[16px]' aria-label='Decrease Quantity'/>
            </button>
          </div>
          <div className="bg-neutral hover:bg-primary px-2 py-1">
            <button type='button' className='text-xs font-semibold text-white  h-full' aria-label='Add to cart'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <hr className='my-1 border-gray-300 lg:my-2' />
      <div className="flex flex-wrap justify-between">
        <button type='button' aria-label="Checkout" className='text-[0.65rem] text-left hover:text-primary flex font-semibold mb-1'><CheckoutIcon className={'w-4 me-1'} /> Quick Checkout</button>
        <button type='button' aria-label="Ask a question" className='text-[0.65rem] text-left hover:text-primary flex font-semibold'><QuestionMarkIcon className={'w-4 me-1'} /> Ask a question</button>
      </div>
    </div>
  )
}

export default ProductCard