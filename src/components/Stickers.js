import React from 'react';

import cloudinaryLogo from '../assets/cloud.svg';
import appwriteLogo from '../assets/app.svg';
import hostingerLogo from '../assets/host.svg';
import streamLogo from '../assets/stream.svg';
import dockerLogo from '../assets/dock.svg';

const stickers = [
  { logo: cloudinaryLogo, name: "Cloudinary" },
  { logo: appwriteLogo, name: "Appwrite" },
  { logo: hostingerLogo, name: "Hostinger" },
  { logo: streamLogo, name: "Stream" },
  { logo: dockerLogo, name: "Docker" },
];

const Stickers = () => {
  return (
    // Main container using Flexbox for overall layout
    // gap-x controls horizontal space, gap-y controls vertical space if items wrap
    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 p-4 mt-16">
      {stickers.map((sticker, index) => (
        // Each item (logo + name) is grouped in a flex container
        <div key={index} className="flex items-center space-x-3">
          <img
            src={sticker.logo}
            alt={sticker.name}
            // Adjust height as needed
            className="h-8 sm:h-9 md:h-10 object-contain"
          />
          {/* The text name is added back here */}
          <span className="text-white font-bold text-xl">{sticker.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stickers;
