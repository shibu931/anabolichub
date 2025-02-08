
import React from 'react'
import Reviews from '@/components/ReviewsPage/Reviews' 

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