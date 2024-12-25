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

const HomePage = ({ data }) => {

  return (
    <>
      {/* Notification Bar */}
      <InformationBar icon='bank' text='Good news! Our bank transfer option is back up and running.' className='bg-primary text-xs px-2' />

      <HomeCarousel />

      {/* Proudict Card */}
      <section className="mt-5 px-5 lg:px-0">
        <Tabs defaultValue="new_products" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger className="w-full py-2 bg-neutral text-white focus:ring-0 rounded-none" value="new_products">New Products</TabsTrigger>
            <TabsTrigger className="w-full py-2 bg-neutral text-white focus:ring-0 rounded-none" value="best_sellers">Best Sellers</TabsTrigger>
          </TabsList>
          <TabsContent value="new_products">
            <div className="grid grid-cols-2 lg:grid-cols-5 mt-5 gap-2 lg:gap-x-4">
              {data.latestProducts.products.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="best_sellers">
            <div className="grid grid-cols-2 lg:grid-cols-5 mt-5 gap-2 lg:gap-x-4">
              {data.bestSellingProducts.products.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-5 px-5 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-8 gap-y-4 sm:gap-x-4">
          <div className="col-span-6">
            <InformationBar text="INJECTABLE STEROIDS" className='bg-primary' />
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-2 lg:gap-x-4">
              {data.injectibleSteroids.products.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            {/* CTA CARD */}
            <div className="relative w-full mx-auto">
              <Image
                src="/assets/cta-images/4.png"
                alt='Steigere Deine Leistung Jetzt'
                width={380}
                height={650}
                className='w-full h-[300px] lg:h-full object-cover'
              />
              <div className="absolute top-0 bg-black/60 w-full h-full z-10">
                <div className="flex justify-center items-center h-full flex-col">
                  <p className='text-white font-semibold text-shadow-lg mb-3'>Steigere Deine Leistung Jetzt</p>
                  <Link href="/injizierbare-steroide" className="btn btn-sm btn-primary rounded-none">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 px-5 lg:px-0">
        <InformationBar text="PEPTIDES" className='bg-primary' />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-5 gap-2 lg:gap-x-4">
          {data.Peptide.products.map((item, index) => (
            <ProductCard product={item} key={index} />
          ))}
        </div>
      </section>

      <section className="mt-5 px-5 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-8 gap-y-4 sm:gap-x-4">
          <div className="col-span-1 lg:col-span-2">
            {/* CTA CARD */}
            <div className="relative w-full mx-auto">
              <Image
                src="/assets/cta-images/1.png"
                alt='Werde Heute Noch Definiert'
                width={380}
                height={650}
                className='w-full h-[300px] lg:h-full object-cover'
              />
              <div className="absolute top-0 bg-black/60 w-full h-full z-10">
                <div className="flex justify-center items-center h-full flex-col">
                  <p className='text-white font-semibold text-shadow-lg mb-3'>Werde Heute Noch Definiert</p>
                  <Link href="/orale-steroiden" className="btn btn-sm btn-primary rounded-none">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <InformationBar text="ORAL STEROIDS" className='bg-primary' />
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-2 lg:gap-x-4">
              {data.oralSteroids.products.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
