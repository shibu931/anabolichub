
import React from 'react'
import Reviews from '@/components/ReviewsPage/Reviews' 

export const generateMetadata = () => {
  return {
    title: 'Kundenmeinungen',
    description: 'Lesen Sie, was unsere Kunden über ihren Einkauf in unserem Shop sagen.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    alternates: {
      canonical: '/reviews',
    },
    openGraph: {
      title: 'Kundenmeinungen',
      description: 'Lesen Sie, was unsere Kunden über ihren Einkauf in unserem Shop sagen.',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kundenmeinungen',
      description: 'Lesen Sie, was unsere Kunden über ihren Einkauf in unserem Shop sagen.',
    },
  }
}

const page = async () => {

  const data = await fetch(`http://localhost:3000/api/review`)
  const {reviews} = await data.json();
  
  return (
    <div className='container xl:w-[1280px] mx-auto mt-4'>
      <h1 className='text-2xl font-bold text-center my-8'>Kundenmeinungen zu unserem Shop</h1>
      <Reviews reviews={reviews}/>
    </div>
  )
}

export default page