'use client'
import React, { useEffect } from 'react'
import { CommerceIcon, CourierIcon } from '@/components/Icons/Icons'
import { useCart } from '@/context/CartContext'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Reviews from '../ReviewsPage/Reviews'
import ProductCarousel from './ProductCarousel'
import ArticlePage from '../Common/ArticlePage'

const productLayout = ({ product,article }) => {
    const { toast } = useToast()
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1)
    const [mainImage, setMainImage] = useState(null)
    const [reviews,setReviews] = useState([])

    const changeQuantity = (type) => {
        if (type === 'increase') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1)
        }
    }
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
                className: 'bg-primary text-base-100',
                title: "Product Added to Cart",
            })
        } else {
            toast({
                className: 'bg-primary text-base-100',
                title: "Something Went Wrong!",
                description: "Product adding to cart failed"
            })
        }
    }
    async function fecthReviews(){
        const res = await fetch(`/api/review?productId=${product.productId}&page=1&limit=10`)
        const data = await res.json()
        setReviews(data.reviews)        
    } 
    useEffect(() => {
        setMainImage(product?.productImage[0].large)
        fecthReviews()
    }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-10 mt-5">
                <div className='p-5 border'>
                    {
                        mainImage && <Image
                            src={mainImage}
                            width={500}
                            height={800}
                            className='w-full'
                            alt={product?.productName}
                        />
                    }
                </div>
                <div >
                    <h1 className='text-3xl font-bold'>{product?.productName}</h1>
                    <p className='font-semibold text-2xl mt-4'>Price: <span className='text-2xl text-green-700 font-extrabold'>{product?.productPrice}</span></p>
                    <hr className='my-4' />
                    <p className='uppercase bg-primary inline px-2 py-1 text-white text-sm font-semibold'>Description</p>
                    {product?.shortDescription && <p className='my-4 mb-5' dangerouslySetInnerHTML={{ __html: product?.shortDescription }}></p>}
                    <div className="my-2"></div>
                    <p className='uppercase bg-primary inline px-2 py-1 text-white text-sm font-semibold'>Information</p>
                    <ul className='mt-3 mb-5'>
                        <li className='mb-2'><strong>Dispatch:</strong>Delivery time up to 2 working days (DPD), up to 4 working days (DHL)</li>
                        <li className='mb-2'><strong>Shipping:</strong>DHL, DPD, DHL Packstation</li>
                        <li className='mb-2'><strong>Shipping costs:</strong>17 €</li>
                        <li className='mb-2'><strong>Payment methods:</strong>Wire transfer</li>
                    </ul>
                    <p className='uppercase bg-primary inline px-2 py-1 text-white text-sm font-semibold'>Quantity</p>
                    <div className='flex mt-4'>
                        <input type="number" className='border border-black/50 w-12 text-lg px-2 py-0 focus:outline-none inline-block text-center' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <div className='flex flex-col'>
                            <button type='button' onClick={() => changeQuantity('increase')} className='text-white bg-gray-800 hover:bg-primary hover:cursor-pointer'><ChevronUp /></button>
                            <button type='button' onClick={() => changeQuantity('decrease')} disabled={quantity <= 1} className='text-white bg-gray-800 hover:bg-primary disabled:bg-neutral/75 hover:cursor-pointer'><ChevronDown /></button>
                        </div>
                        <button type='button' onClick={() => handleAddToCart()} className='btn btn-primary rounded-none font-extrabold ms-2'>ADD TO CART</button>
                    </div>

                    <div className='flex mt-6 items-center'>
                        <div className='bg-black/90 rounded-full p-3 flex items-center justify-center me-4'>
                            <CourierIcon className={'w-10'} />
                        </div>
                        <p className='text-neutral leading-6 font-medium'>We carry out orders throughout the European Union! We ship products immediately after payment (1 business day)</p>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <div className='bg-black/90 rounded-full p-3 flex items-center justify-center me-4'>
                            <CommerceIcon className={'w-10'} />
                        </div>
                        <p className='text-neutral leading-6 font-medium'>Our products are securely packaged and protected from damage. We respect your anonymity – no one will know what you order</p>
                    </div>

                    <div className="mt-6 mb-4">
                        <p><strong>Categories: </strong>
                            {
                                product?.subCategory?.map((item, index) => (
                                    <Link key={index} rel="nofollow" href={`/${item.href}`}>{item.title}, </Link>
                                ))
                            }
                        </p>
                        <small className='text-neutral'>Check what our <Link href={'/'}>steroid shop</Link> offer</small>
                    </div>

                    <hr className='border-b-2 border-black/25' />

                </div>
            </div>

            {product.relatedProducts.length !=0 && <ProductCarousel relatedProducts={product.relatedProducts}/>}

            {/* Reviews */}
            <Tabs defaultValue="article" className="w-full mt-8">
                <TabsList>
                    <TabsTrigger className="text-white bg-neutral" value="article">Description</TabsTrigger>
                    <TabsTrigger className="text-white bg-neutral" value="review">Kundenmeinungen</TabsTrigger>
                </TabsList>
                <TabsContent value="article">
                    {
                        article && <ArticlePage content={article} />
                    }
                </TabsContent>
                <TabsContent value="review">
                    <Reviews reviews={reviews} productId={product.productId} slug={product.slug}/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default productLayout