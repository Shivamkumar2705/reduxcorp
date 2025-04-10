import React from 'react';
import specialityData from '../data/specialityData'; // Import the data

function Speciality() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-purple-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Our Speciality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialityData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="mb-4 h-20 w-20"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speciality;