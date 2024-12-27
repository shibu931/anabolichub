import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function handleCheckout(formData) {
    'use server';
    const { userId } = await auth(); // Get user id here
    const addressData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        zipCode: formData.get('postalCode'),
        address: formData.get('address'),
        country: formData.get('country'),
        city: formData.get('city')
    };

    let success = false;
    let errorMsg = '';
    let data;
    try {
        const res = await fetch(`${process.env.DOMAIN_URL}/api/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, addressData }),
        });

        data = await res.json();

        if (!res.ok) {
            errorMsg = `API returned an error: ${res.status} - ${json.message || 'Unknown error'}`;
        } else {
            success = true;
        }
    } catch (error) {
        console.error('Checkout error:', error);
        errorMsg = 'An error occurred during checkout.';
    }
    revalidatePath('/checkout');
    if (success) {
        redirect(`/orders/view-order-details?checkout=true&orderId=${data.order.orderId}`);
    } else {
        redirect('/checkout/error?message=' + encodeURIComponent(errorMsg));
    }
}

const CheckoutForm = ({ address }) => {
    return (
        <form action={handleCheckout}>
            <div className="grid grid-cols-2 gap-5">
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input type="text" name="name" placeholder="Enter Your Name Here" className="input-field" defaultValue={address && address.name} required />
                </label>

                <label className="form-control col-span-1">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" name="email" placeholder="Enter Your Email Here" className="input-field" defaultValue={address && address.email} required />
                </label>

                <label className="form-control col-span-1">
                    <div className="label">
                        <span className="label-text">Phone Number</span>
                    </div>
                    <input type="number" name="phone" placeholder="Enter Your Phone Number" className="input-field" defaultValue={address && address.phone} required />
                </label>

                <label className="form-control col-span-1">
                    <div className="label">
                        <span className="label-text">Postal Code</span>
                    </div>
                    <input type="number" name="postalCode" placeholder="Enter Your Postal Code" className="input-field" defaultValue={address && address.zipCode} required />
                </label>

                <label className="form-control col-span-2">
                    <div className="label">
                        <span className="label-text">Address</span>
                    </div>
                    <textarea name="address" className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25" defaultValue={address && address.address} placeholder="Enter Your Complete Address Here" required></textarea>
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Select Your Country</span>
                    </div>
                    <select name="country" className="select select-bordered rounded-none" required>
                        {
                            address && <option defaultValue={address && address.country}>{address && address.country}</option>
                        }
                        <option value="Austria">Austria</option>
                        <option value="Belgium" >Belgium</option>
                        <option value="Bulgaria" >Bulgaria</option>
                        <option value="Croatia" >Croatia</option>
                        <option value="Cyprus" >Cyprus</option>
                        <option value="Czech Republic" >Czech Republic</option>
                        <option value="Denmark" >Denmark</option>
                        <option value="Germany" >Germany</option>
                        <option value="Estonia" >Estonia</option>
                        <option value="Finland" >Finland</option>
                        <option value="France" >France</option>
                        <option value="Greece" >Greece</option>
                        <option value="Hungary" >Hungary</option>
                        <option value="Ireland" >Ireland</option>
                        <option value="Italy" >Italy</option>
                        <option value="Latvia" >Latvia</option>
                        <option value="Lithuania" >Lithuania</option>
                        <option value="Luxembourg" >Luxembourg</option>
                        <option value="Malta" >Malta</option>
                        <option value="Netherlands" >Netherlands</option>
                        <option value="Poland" >Poland</option>
                        <option value="Portugal" >Portugal</option>
                        <option value="Romania" >Romania</option>
                        <option value="Slovakia" >Slovakia</option>
                        <option value="Slovenia" >Slovenia</option>
                        <option value="Spain" >Spain</option>
                        <option value="Sweden" >Sweden</option>
                    </select>
                </label>

                <label className="form-control col-span-1">
                    <div className="label">
                        <span className="label-text">City</span>
                    </div>
                    <input type="text" name="city" placeholder="Enter Your City" className="input-field" defaultValue={address && address.city} required />
                </label>

                <div className="col-span-2">
                    <button type='submit' className='btn btn-primary w-full rounded-none text-base font-bold'>Place Order</button>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm