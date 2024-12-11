'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

const AuthorityApproval = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div className="mt-10 px-4 sm:px-4 lg:px-4">
      {/* Container for the heading */}
      <div className="mx-auto max-w-7xl mb-10 px-4 sm:px-4 lg:px-4 xl:px-4 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-200 tracking-widest text-left">
          Official Approved By Authority:
        </h1>
      </div>

      {/* Swiper Container */}
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 }, // Small screens
          768: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
          1280: { slidesPerView: 3, spaceBetween: 30 }, // Extra-large screens
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {/* Responsive Image Container */}
            <div className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={`/image/authority/authority${index}.png`}
                alt={`authority ${index}`} 
                width={520} // Set the base width for responsive scaling
                height={320} // Set the base height to maintain aspect ratio
                layout="responsive" // Make the image responsive
                objectFit="contain" // Contain the image within the box
                className="rounded-lg m-5 transition-transform duration-700 ease-in-out hover:scale-105 ring-2 ring-gray-700 dark:ring-primary ring-offset-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AuthorityApproval;
