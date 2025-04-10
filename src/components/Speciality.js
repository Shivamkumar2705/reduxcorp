import React from 'react';
import specialityData from '../data/specialityData';
import { motion } from 'framer-motion';

function Speciality() {
  return (
<section className="mt-16 md:mt-24 lg:mt-32">
      
      {/* Glowing Background Effects */}
      <div className="absolute top-[-60px] left-[-80px] w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-pink-700 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400 mb-12"
        >
          Our Speciality
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialityData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f] p-6 rounded-xl border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-20 w-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speciality;
