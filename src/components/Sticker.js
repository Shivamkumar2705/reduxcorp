import React from "react";
import Cloudinary from "../assets/Cloudinary.svg"; // Assuming you'll place the logo SVGs in an assets folder
import Appwrite from "../assets/Appwrite.svg";
import Hostinger from "../assets/Hostinger.svg";
import Stream from "../assets/Stream.svg";
import Docker from "../assets/Docker.svg";

function Sticker() {
  return (
    <section className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <img src={Cloudinary} alt="Cloudinary" className="h-8 mx-4" />
        <img src={Appwrite} alt="Appwrite" className="h-8 mx-4" />
        <img src={Hostinger} alt="Hostinger" className="h-8 mx-4" />
        <img src={Stream} alt="Stream" className="h-8 mx-4" />
        <img src={Docker} alt="Docker" className="h-8 mx-4" />
      </div>
    </section>
  );
}

export default Sticker;