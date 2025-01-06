import Breadcrumbs from '@/components/Common/Breadcrumbs'
import React from 'react'

const page = () => {
  return (
    <main className='container xl:w-[1280px] mx-auto px-4 lg:px-0'>
      <Breadcrumbs className='my-4' />
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-6 sm:col-span-3 lg:col-span-6 mx-auto">
          <h2 className='text-center text-2xl my-4 font-bold'>Contact Us</h2>
          <hr />
          <form action="">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input type="text" name="name" placeholder="Enter Your Name Here" className="input-field" required />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="email" name="email" placeholder="Enter Your Email Here" className="input-field" required />
            </label>

            <label className="form-control ">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea name="message" className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25" required></textarea>
            </label>
            <div className="">
              <button type='submit' className='btn btn-primary w-full rounded-none text-base font-bold mt-4'>Send Message</button>
          </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default page