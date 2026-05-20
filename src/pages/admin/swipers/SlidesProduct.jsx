import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./SlidesProduct.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SlidesProduct({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='h-80'>
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 relative"
      >
        {item.listImg.map((e, index) => (
          <SwiperSlide key={index}>
            <img src={e} className="w-full h-full rounded-lg object-cover" />
          </SwiperSlide>
        ))}
        <div className='absolute bottom-2 left-2 z-1 font-bold text-white'>
             {item.name}
        </div>
        {/* Nút trái */}
        <div
          ref={prevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
               bg-black/50 hover:bg-black/70 text-white 
               p-2 rounded-full cursor-pointer"
        >
          <FaChevronLeft />
        </div>

        {/* Nút phải */}
        <div
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
               bg-black/50 hover:bg-black/70 text-white 
               p-2 rounded-full cursor-pointer"
        >
          <FaChevronRight />
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {item.listImg.map(e => (
          <SwiperSlide>
            <img src={e} className='w-full h-full' />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
}
