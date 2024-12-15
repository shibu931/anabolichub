'use client'
import React from 'react'
import { HomeCarousel } from './Carousel'
import ProductCard from '../Common/ProductCard'
import InformationBar from '../Common/InformationBar'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      {/* Notification Bar */}
      <InformationBar icon='bank' text='Good news! Our bank transfer option is back up and running.' className='bg-primary' />

      <HomeCarousel />

      {/* Proudict Card */}
      <section className="mt-5">
        <Tabs defaultValue="new_products" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger className="w-full py-2 bg-neutral text-white focus:ring-0 rounded-none" value="new_products">New Products</TabsTrigger>
            <TabsTrigger className="w-full py-2 bg-neutral text-white focus:ring-0 rounded-none" value="best_sellers">Best Sellers</TabsTrigger>
          </TabsList>
          <TabsContent value="new_products">
            <div className="grid grid-cols-5 mt-5 gap-x-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="best_sellers">
            <div className="grid grid-cols-5 mt-5 gap-x-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-5">
        <div className="grid lg:grid-cols-8 gap-4">
          <div className="col-span-6">
            <InformationBar text="INJECTABLE STEROIDS" className='bg-primary' />
            <div className="grid grid-cols-4 mt-5 gap-x-4">
              {[1, 2, 3, 4].map((item, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
          <div className="col-span-2">
          <div className="relative">
            <Image
              src="/assets/cta-images/4.png"
              alt='CTA Banner'
              width={380}
              height={650}
              className='h-full'
            />
            <div className="absolute top-0 bg-black/60 w-full h-full z-10">
              <div className="flex justify-center items-center h-full flex-col">
                <p className='text-white font-semibold text-shadow-lg mb-3'>Lorem ipsum dolor sit.</p>
                <Link href="/" className="btn btn-sm btn-primary rounded-none">Shop Now</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <InformationBar text="HGH & PEPTIDES" className='bg-primary' />
        <div className="grid grid-cols-5 mt-5 gap-x-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className="grid lg:grid-cols-8 gap-4">
          <div className="col-span-2">
            {/* CTA CARD */}
            <div className="relative">
            <Image
              src="/assets/cta-images/1.png"
              alt='CTA Banner'
              width={380}
              height={650}
              className='h-full'
            />
            <div className="absolute top-0 bg-black/60 w-full h-full z-10">
              <div className="flex justify-center items-center h-full flex-col">
                <p className='text-white font-semibold text-shadow-lg mb-3'>Lorem ipsum dolor sit.</p>
                <Link href="/" className="btn btn-sm btn-primary rounded-none">Shop Now</Link>
              </div>
            </div>
            </div>

          </div>
          <div className="col-span-6">
            <InformationBar text="ORAL STEROIDS" className='bg-primary' />
            <div className="grid grid-cols-4 mt-5 gap-x-4">
              {[1, 2, 3, 4].map((item, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default HomePage