import React from 'react';

function Border() {
  return (
  
      <div className="container mx-auto text-center mt-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Ready to take your <span className="text-purple-400">digital presence</span> to
          the next level?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Reach out to us today and let's discuss how we can help you achieve your goals.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
          Let's get in touch →
        </button>
      </div>
   
  );
}

export default Border;