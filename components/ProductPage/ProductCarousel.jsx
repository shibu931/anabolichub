'use client';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../Common/ProductCard';

const ProductCarousel = ({ relatedProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/products/getRelatedProducts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productIds: relatedProducts }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching related products:', err);
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    if (relatedProducts && relatedProducts.length > 0) {
      fetchRelatedProducts();
    } else {
      setLoading(false);
    }
  }, [relatedProducts]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No related products found.</p>;
  }

  return (
    <div className='related-products'>
      <h3 className="text-center text-xl font-semibold mt-10 mb-4">
        Vielleicht gefällt Ihnen auch
      </h3>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween:15
            },
            980: {
              slidesPerView: 4,
              spaceBetween:15
            },
            1268:{
                slidesPerView: 5,
                spaceBetween:15
            }
          }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;