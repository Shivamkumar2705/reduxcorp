// src/components/Midicomponent.js
import React from "react";
import testimonialData from "../data/testimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Midicomponent() {
  return (
    <div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f] p-6 rounded-xl shadow-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <p className="text-lg italic mb-6 text-gray-300">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-purple-400">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Midicomponent;
