'use client'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const HomeCarousel = () => {
  const sliderImage = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
  ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {
        sliderImage.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/assets/banner/${item}`}
              height="400"
              width="1200"
              alt="Kraftzonal"
              className="w-full h-[220px] object-fill sm:h-auto"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};