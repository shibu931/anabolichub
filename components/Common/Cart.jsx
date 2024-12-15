"use client"
import Link from 'next/link'
import { CartIcon, } from '../Icons/Icons'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react'


const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="indicator hover:cursor-pointer">
                    <span className="indicator-item badge badge-primary">0</span>
                    <div className="border rounded-full border-accent-content/50 px-2 py-1 hover:bg-slate-800 cart-icn"><CartIcon className="w-8 hover:" /></div>
                </div>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetTitle>Manage Your Cart</SheetTitle>
                <div className=" bg-base-100 text-base-content mt-4 min-h-full flex flex-col relative">
                    <ul className='overflow-y-auto h-[500px] border-b border-gray-200'>
                        <li className='hover:bg-white focus:bg-white'>
                            <CartProduct />
                        </li>
                    </ul>
                    <div className='pt-2 w-full bottom-10 absolute'>
                        <p className='flex justify-between mb-1'>
                            <strong className='text-sm'>Product Total: </strong>
                            <span className='text-sm'>50€</span>
                        </p>
                        <p className='flex justify-between mb-2'>
                            <strong className='text-sm'>Delivery Charges: </strong>
                            <span className='text-sm'>17€</span>
                        </p>
                        <p className='flex border-t border-gray-200 justify-between mb-4 pt-1'>
                            <strong className='text-sm'>Total: </strong>
                            <span className='text-sm'>50€</span>
                        </p>
                        <Link className='btn btn-primary w-full rounded-none text-white' href="/">Checkout</Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Cart


const product = {
    id: 1,
    title: 'AL Trenbolone Mix',
    image: 'https://steroidskaufen.com/416-home_default/anubis-boldenone-undecylenate-250-mg-10-ml.webp',
    price: 50.00,
    productPricePerMg: '0.033',
    brandName: 'ASTERA LABS',
    brandLink: '/astera-labs',
    category: 'STEROIDS',
    subCategory: 'TRENBOLONE MIX',
    href: '/steroids/trenbolone-mix/al-trenbolone-mix',
    info: 'NEW'
}

export const CartProduct = () => {
    let [quantity,setQuantity] = useState(1)
    const { id, title, image, price } = product;

    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity( quantity + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity( quantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Product Image */}
            <div className="flex items-center space-x-4">
                <Image
                    src={image}
                    alt={title}
                    width={40}
                    height={40}
                    className="w-16 h-16 object-cover rounded-md"
                />

                <div>
                    {/* Product Info */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-500">Price: {price.toFixed(2) * quantity}€</p>
                    </div>
                    {/* Quantity Controller */}
                    <div className="flex items-center space-x-2 mt-2">
                        <button
                            onClick={() => handleQuantityChange('decrement')}
                            className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            -
                        </button>
                        <input type="text" onChange={(e)=>setQuantity(e.target.value)} value={quantity} className='w-[38px] text-gray-700 h-[33px] focus-visible:ring-0 border rounded-md px-2 ' />
                        {/* <span className="px-4 py-1 text-gray-700 border rounded-md">{quantity}</span> */}
                        <button
                            onClick={() => handleQuantityChange('increment')}
                            className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <button
                onClick={() => onRemove(id)}
                className="text-red-500 hover:text-red-700"
            >
                Remove
            </button>
        </div>
    );
};
