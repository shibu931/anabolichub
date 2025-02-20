import { StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ReviewCard = ({ productSlug = null, review }) => {
 
    return (
        <div className='border bg-white shadow p-2 pb-7 border-gray-400 relative h-full'>
            <div className='px-2 flex justify-between items-center'>
                <div>
                    <p className='font-semibold text-lg text-gray-700 flex items-center'>{review.customerName}<span className={`badge text-xs font-normal ms-2 ${review.isVerified ? 'bg-purple-800/30' :'bg-slate-800/30'}`}>{review.isVerified ? 'Verified': 'Not Verified'}</span></p>
                    {productSlug && (<span className='text-xs font-semibold text-gray-600 inline-flex'>Produkt: <Link className='me-1 underline line-clamp-1 overflow-ellipsis' href={productSlug}>{productSlug.replaceAll("-", " ").toUpperCase()}</Link></span>)}
                </div>
                <RatingStar rating={review.rating} />
            </div>
            <hr className='my-2 border-gray-300' />
            <p className='text-gray-600 pb-2'>
                {review.comments}
            </p>
            <span className="absolute border-t border-gray-300 pt-1 w-full right-0 px-2 bottom-1 text-right">
                <p className="text-xs">Gepostet am: {new Date(review.createdAt).toLocaleDateString()}</p>
            </span>
        </div>
    )
}

const RatingStar = ({ rating }) => {
    return (
        <div className="ml-auto flex">
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    className={`w-4 h-4 text-yellow-500 ${i < rating ? 'fill-current' : ''}`}
                />
            ))}
        </div>
    )
}

export default ReviewCard