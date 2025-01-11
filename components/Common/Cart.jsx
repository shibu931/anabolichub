"use client"
import Link from 'next/link'
import { CartIcon, } from '../Icons/Icons'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from 'react'
import { useCart } from "@/context/CartContext";


const Cart = () => {
    const { cart, productTotal } = useCart();
    const [disableCheckout, setDisableCheckout] = useState(cart?.item ? false : true)

    useEffect(() => {
        if (!cart || !cart.item || cart.item.length === 0) {
            setDisableCheckout(true);
            return;
        }
        const hasInvalidItem = cart.item.some((item) => item.quantity <= 0);
        setDisableCheckout(hasInvalidItem);
    }, [cart]);
    return (
        <Sheet>
            <SheetTrigger>
                <div className="indicator hover:cursor-pointer">
                    <span className="indicator-item badge badge-sm lg:badge-md badge-primary">{cart ? cart?.item?.length : '0'}</span>
                    <div className="border rounded-full border-accent-content/50 px-2 py-1 hover:bg-slate-800 cart-icn"><CartIcon className="w-8 hover:" /></div>
                </div>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetTitle>Manage Your Cart</SheetTitle>
                <div className=" bg-base-100 text-base-content mt-4 min-h-full flex flex-col relative">
                    {
                        cart?.item.length != 0 ? <ul className='overflow-y-auto h-[500px] border-b border-gray-200'>
                            {
                                cart?.item?.map((item, index) => (
                                    <li className='hover:bg-white focus:bg-white' key={index}>
                                        <CartProduct productItem={item} setDisableCheckout={setDisableCheckout} />
                                    </li>
                                ))
                            }
                        </ul> : (
                            <p className='text-error font-semibold text-center'>No Item in Cart</p>
                        )
                    }
                    <div className='pt-2 w-full bottom-10 absolute'>
                        <p className='flex justify-between mb-1'>
                            <strong className='text-sm'>Product Total: </strong>
                            <span className='text-sm'>{productTotal} €</span>
                        </p>
                        <p className='flex justify-between mb-2'>
                            <strong className='text-sm'>Delivery Charges: </strong>
                            <span className='text-sm'>17€</span>
                        </p>
                        <p className='flex border-t border-gray-200 justify-between mb-4 pt-1'>
                            <strong className='text-sm'>Total: </strong>
                            <span className='text-sm'>{productTotal + 17}€</span>
                        </p>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Link className={`btn rounded-none btn-block text-white ${disableCheckout ? 'btn-disabled' : 'btn-primary'}`} href={disableCheckout ? '#' : '/checkout'}>Checkout</Link>
                            </SheetClose>
                        </SheetFooter>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Cart



export const CartProduct = ({ productItem }) => {
    const { product, name, image, price, quantity, slug } = productItem;
    const [q, setQ] = useState(quantity)
    const { removeFromCart, updateCartItemQuantity } = useCart();

    const convertPriceToNumber = (priceString) => {
        const cleanedString = priceString.replace(/[^\d,.-]/g, '');
        const normalizedString = cleanedString.replace(',', '.');
        const priceNumber = parseFloat(normalizedString);

        return priceNumber;
    };
    function updateItemQuantity(product, quantity) {
        if (quantity >= 0) {
            setQ(quantity)
            updateCartItemQuantity(product, quantity)
        }
    }
    const [p, setP] = useState(convertPriceToNumber(price))
    const handleQuantityChange = (e) => {
        if (e.target.value >= 0) {
            setQ(e.target.value)
            updateCartItemQuantity(product, e.target.value)
        }
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Product Image */}
            <div className="flex items-center space-x-4">
                <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="w-16 h-16 object-cover rounded-md"
                />

                <div>
                    {/* Product Info */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-800"><Link href={`/product/${slug}`}>{name}</Link></h3>
                        <p className="text-sm text-gray-500">Price: {p.toFixed(2) * q}€</p>
                    </div>
                    {/* Quantity Controller */}
                    <div className="flex items-center space-x-2 mt-2">
                        <button
                            onClick={() => updateItemQuantity(product, Number(q) - 1)}
                            className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            -
                        </button>
                        <input type="text" onChange={(e) => handleQuantityChange(e)} value={q} className='w-[38px] text-gray-700 h-[33px] focus-visible:ring-0 border rounded-md px-2 ' />
                        {/* <span className="px-4 py-1 text-gray-700 border rounded-md">{quantity}</span> */}
                        <button
                            onClick={() => updateItemQuantity(product, Number(q) + 1)}
                            className="px-3 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <button
                onClick={() => removeFromCart(product)}
                className="text-red-500 hover:text-red-700"
            >
                Remove
            </button>
        </div>
    );
};
