import React from "react";
import approachData from "../data/approachData";

function Approach() {
  return (
   
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between "
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
     
  );
}

export default Approach;