import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {slides} from '../../static'

// Rasmlar (o'zingiz xohlagancha almashtiring)


const Headrhero = () => {
  return (
    <div className="w-full h-[800px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="min-w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="size-full relative"
              style={{
                
              }}

              
              
              >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
              <img src={slide.image} alt="" className='absolute top-0 left-0 inset-0 size-full object-cover' />
      
              <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-6 text-white max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-2">{slide.description}</p>
                <p className="text-base md:text-lg mb-6">{slide.subText}</p>
                <button className="bg-white text-black px-6 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition">
                  See more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Headrhero;
