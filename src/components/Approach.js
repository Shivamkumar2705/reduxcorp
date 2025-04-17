import React from "react";
import approachData from "../data/approachData";

const Approach = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-16 ">
      {approachData.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden bg-white/5 dark:bg-[#1a1a2e]/50 border border-purple-500/40 rounded-3xl px-6 py-12 h-[460px] w-full max-w-sm mx-auto flex flex-col justify-center items-center backdrop-blur-xl transition-all duration-500 transform hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(168,85,247,0.3)]"
        >
          {/* Floating SVG Stars */}
          <svg
            className="absolute w-4 h-4 text-purple-300 opacity-0 group-hover:opacity-100 animate-float1 top-8 left-8 z-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.692a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.294a1 1 0 00-.364 1.118l1.2 3.692c.3.921-.755 1.688-1.54 1.118l-3.158-2.294a1 1 0 00-1.176 0l-3.158 2.294c-.784.57-1.838-.197-1.539-1.118l1.2-3.692a1 1 0 00-.364-1.118L2.316 9.12c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.2-3.692z" />
          </svg>

          <svg
            className="absolute w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 animate-float2 bottom-8 right-8 z-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="2" />
          </svg>

          {/* Title */}
          <div className="px-4 py-2 text-purple-300 border border-purple-500 rounded-full text-sm font-bold tracking-wide transition-all duration-500 group-hover:opacity-0 z-10">
            {item.title}
          </div>

          {/* Description */}
          <p className="absolute text-purple-200 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2 text-center text-sm px-6 z-10">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Approach;
