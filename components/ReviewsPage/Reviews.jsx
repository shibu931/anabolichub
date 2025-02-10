import React from 'react'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

const Reviews = ({ reviews, productId = null, slug = null, page, totalPages=1 }) => {

  return (
    <div>
      <div className="grid grid-cols-12 gap-8 mt-4 px-3">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="border border-gray-400 shadow p-4 h-auto sticky top-4">
            <h4 className='text-center text-lg font-medium uppercase mb-2'>Post Your Opinions</h4>
            <ReviewForm productId={productId} slug={slug} />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
              reviews?.length != 0 ?
                reviews?.map((item) => (
                  item?.reviews.map((review) => (
                    <ReviewCard productSlug={item.slug} review={review} />
                  ))
                ))
                :
                <div className='sm:col-span-2 flex items-center justify-center'>
                  <p className='text-lg font-semibold'>No Reviews Recieved For This Product</p>
                </div>
            }
          </div>
          {/* <div>
            <div className="join my-4 lg:my-8 flex justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`join-item btn btn-square ${page === pageNumber ? 'btn-active' : ''}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Reviews