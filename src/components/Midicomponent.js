import React, { useState } from "react";
import testimonialData from "../data/testimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Midicomponent() {
  const [expandedStates, setExpandedStates] = useState(
    testimonialData.map(() => false)
  ); // Initialize expanded state for each card

  const toggleReadMore = (index) => {
    setExpandedStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const getDisplayedText = (text, index) => {
    const maxLength = 150; // Adjust as needed
    if (text.length <= maxLength) {
      return text;
    }
    if (expandedStates[index]) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  return (
   
        <div className="mt-8">
          <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // 👈 This is what you're missing!
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
                  <p className="text-lg italic mb-4 text-gray-300">
                    "{getDisplayedText(testimonial.text, index)} <span>{testimonial.text.length > 150 && (
                    <button
                      className="text-purple-400 hover:text-purple-300 font-semibold text-sm focus:outline-none"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedStates[index] ? "Read Less" : "Read More"}
                    </button>
                  )}</span>
                  </p>
              
                  <div className="mt-4">
                    <p className="font-semibold text-purple-400">
                      {testimonial.author}
                    </p>
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