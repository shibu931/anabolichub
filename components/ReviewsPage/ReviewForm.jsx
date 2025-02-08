'use client'
import { Star, } from 'lucide-react';
import React, { useState } from 'react'
import ComboBoxInput from '../Common/ComboBoxInput'
import { useToast } from "@/hooks/use-toast"

const ReviewForm = ({productId,slug}) => {
    const { toast } = useToast()
    const [loading,setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null);
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        rating:3,
        comments: '',
    });
    const handleRatingChange = (newRating) => {
      setFormData({...formData,rating:newRating})
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const data = {
                productId: productId,
                slug: slug,
                review: formData,
            };

            const response = await fetch(`/api/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            toast({
                className:'bg-primary text-base-100',
                title: "Review Received",
                description: "Review Received"
              })
            const res = await response.json();
            setFormData({
                customerName: '',
                customerEmail: '',
                rating: 3,
                comments: '',
            });

        } catch (error) {
            toast({
                className:'bg-primary text-base-100',
                title: "Something Went Wrong!",
                description: "Product adding to cart failed"
              })
            console.error("Error submitting review:", error);
            setErrorMsg(error.message); 
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 gap-y-2">
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input
                        type="text"
                        name="customerName"
                        placeholder="Geben Sie hier Ihren Namen ein"
                        className="input-field"
                        value={formData.customerName}
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
                        name="customerEmail"
                        placeholder="Geben Sie hier Ihre E -Mail ein"
                        className="input-field"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        required
                    />
                </label>

                {/* <label className="form-control col-span-2">
                    <div className="label">
                        <span className="label-text">Select Product</span>
                    </div>
                    <ComboBoxInput/>
                </label> */}

                <label className="form-control col-span-2">
                    <div className="label">
                        <span className="label-text">Comments</span>
                    </div>
                    <textarea
                        name="comments"
                        className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Geben Sie hier Ihre vollständige Adresse ein"
                        required
                    ></textarea>
                </label>
                <label className="mb-2 form-control col-span-2">
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <StarRating initialRating={3} onChange={handleRatingChange} />
                </label>
                <div className="col-span-2">
                    <button type='submit' disabled={loading} className='btn btn-primary w-full rounded-none text-base font-bold'>{loading ? 'Verfahren' : 'Befehl'}</button>
                </div>
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            </div>
        </form>
    );
}

export default ReviewForm

const StarRating = ({ initialRating = 0, onChange }) => {
    const [rating, setRating] = useState(initialRating);
  
    const handleStarClick = (newRating) => {
      setRating(newRating);
      if (onChange) {
        onChange(newRating);
      }
    };
  
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            fill={index < rating ? '#eab308' : 'none'} 
            color={index < rating ? '#eab308' : 'gray'} 
            className="h-5 w-5 cursor-pointer"  
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
    );
  };
  