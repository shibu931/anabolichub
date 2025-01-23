'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { useCart } from '@/context/CartContext';

const CheckoutForm = ({ address }) => {
  let { isLoaded, userId } = useAuth()
  if(!userId && isLoaded) userId = 'guest'
  const {cart} = useCart()
  const [loading,setLoading] = useState(false) 
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: address?.name || '',
    email: address?.email || '',
    phone: address?.phone || '',
    zipCode: address?.zipCode || '',
    address: address?.address || '',
    country: address?.country || '',
    city: address?.city || '',
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setLoading(true)
      const response = await fetch(`/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId,
          addressData: formData ,
          cart
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`API returned an error: ${response.status} - ${data.message || 'Unknown error'}`);
      }
      setLoading(false)
      router.push(`/orders/view-order-details?checkout=true&orderId=${data.order.orderId}`);
    } catch (error) {
      setLoading(false)
      console.error('Checkout error:', error);
      setErrorMsg(error.message || 'An error occurred during checkout.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Your Name Here" 
            className="input-field" 
            value={formData.name} 
            onChange={handleChange}
            required 
          />
        </label>

        <label className="form-control col-span-1">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Your Email Here" 
            className="input-field" 
            value={formData.email} 
            onChange={handleChange}
            required 
          />
        </label>

        <label className="form-control col-span-1">
          <div className="label">
            <span className="label-text">Phone Number</span>
          </div>
          <input 
            type="number" 
            name="phone" 
            placeholder="Enter Your Phone Number" 
            className="input-field" 
            value={formData.phone} 
            onChange={handleChange}
            required 
          />
        </label>

        <label className="form-control col-span-1">
          <div className="label">
            <span className="label-text">Postal Code</span>
          </div>
          <input 
            type="number" 
            name="zipCode" 
            placeholder="Enter Your Postal Code" 
            className="input-field" 
            value={formData.zipCode} 
            onChange={handleChange}
            required 
          />
        </label>

        <label className="form-control col-span-2">
          <div className="label">
            <span className="label-text">Address</span>
          </div>
          <textarea 
            name="address" 
            className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25" 
            value={formData.address} 
            onChange={handleChange}
            placeholder="Enter Your Complete Address Here" 
            required
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Your Country</span>
          </div>
          <select 
            name="country" 
            className="select select-bordered rounded-none" 
            value={formData.country} 
            onChange={handleChange}
            required
          >
            <option value="">Select a country</option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Croatia">Croatia</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Germany">Germany</option>
            <option value="Estonia">Estonia</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Greece">Greece</option>
            <option value="Hungary">Hungary</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Latvia">Latvia</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Malta">Malta</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
          </select>
        </label>

        <label className="form-control col-span-1">
          <div className="label">
            <span className="label-text">City</span>
          </div>
          <input 
            type="text" 
            name="city" 
            placeholder="Enter Your City" 
            className="input-field" 
            value={formData.city} 
            onChange={handleChange}
            required 
          />
        </label>

        <div className="col-span-2">
          <button type='submit' disabled={loading} className='btn btn-primary w-full rounded-none text-base font-bold'>{loading ? 'Processing':'Place Order'}</button>
        </div>
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
    </form>
  );
};

export default CheckoutForm;