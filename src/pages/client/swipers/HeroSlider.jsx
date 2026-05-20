// HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "TIN ĐĂNG VIDEO",
    subtitle: "Ưu tiên hiển thị Khách thật – Dễ chốt",
    buttonText: "Đăng tin video ngay",
    image: "https://dragoneden.vn/wp-content/uploads/2026/05/Banner-KV-970x546-PC-2.jpg",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Nền tảng công nghệ số",
    subtitle: "Giúp giao dịch bất động sản nhanh chóng",
    buttonText: "Khám phá ngay",
    image: "https://khaihoanimperial.com.vn/wp-content/uploads/2026/04/KHI-HO-BOI-L1-V5-ti.jpg",
    bgColor: "bg-blue-600",
  },
    {
    id: 3,
    title: "Nền tảng công nghệ số",
    subtitle: "Giúp giao dịch bất động sản nhanh chóng",
    buttonText: "Khám phá ngay",
    image: "https://indochinerealestate.vn/uploads/1773979122.jpeg",
    bgColor: "bg-blue-600",
  }
];

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Dùng background image thay vì img */}
            <div
              className={`relative text-white w-full h-[500px] flex items-center justify-center`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay đen mờ */}
              <div className="absolute inset-0  bg-opacity-30"></div>
              
      
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;