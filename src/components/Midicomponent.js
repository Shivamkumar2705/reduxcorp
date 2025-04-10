// src/components/Midicomponent.js
import React from "react";
import testimonialData from "../data/testimonialData";

function Midicomponent() {
  return (
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div className="mb-4">
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">
                  - {testimonial.author}
                </p>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
    
  );
}

export default Midicomponent;