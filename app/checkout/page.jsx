import Breadcrumbs from '@/components/Common/Breadcrumbs';
import AddressForm from '../../components/Common/AddressForm'
import CheckoutOrderSummary from '../../components/CheckoutPage/CheckoutOrderSummary'
import { auth } from '@clerk/nextjs/server'
import {fetchUserAddress} from '@/lib/actions/address.actions'
import Link from 'next/link';

async function CheckoutPage() {
    const { userId } = await auth();
    let address = null;
    if(!userId) address = await fetchUserAddress(userId)
    
    return (
        <div className="container xl:w-[1280px] mx-auto pt-5 px-2 lg:px-0">
            <Breadcrumbs />
            <h1 className="text-3xl text-center uppercase font-bold mt-4">Checkout</h1>
            <hr className='my-4' />
            {!userId && <p className='mb-4 font-medium'>Already Have a Account? <Link className='link' href="/login">Log In</Link> </p>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <h2 className='text-xl font-semibold uppercase mb-4'>Shipping Address</h2>
                    <AddressForm address={address} />
                </div>
                <div>
                    {/* <div className='mb-6'>
                        <h4 className='text-xl font-semibold text-gray-700 mb-2'>Have a Coupon</h4>
                        <div className="flex">
                        <label className="form-control">
                            <input type="text" placeholder="Enter Your Coupon Code" className="input input-bordered w-full rounded-none max-w-xs hover:border-primary/25 hover:outline-primary/25" />
                        </label>
                        <button className='btn btn-primary rounded-none text-white ms-2'>Apply</button>
                        </div>
                    </div> */}
                    <div className="col-span-1 border bg-base-200/50 p-6 rounded shadow">
                        <CheckoutOrderSummary />
                    </div>
                </div>
            </div>

        </div>
    );
}



export default CheckoutPage;