import React from 'react';

// Import all 5 logos individually
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
   
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {stickers.map((sticker, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img 
              src={sticker.logo} 
              alt={sticker.name} 
              className="h-10 object-contain"
            />
            <span className="text-white text-sm">{sticker.name}</span>
          </div>
        ))}
      </div>

  );
};

export default Stickers;
