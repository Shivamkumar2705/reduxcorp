import React, { useState } from "react";

// --- Icon Components (Using Heroicons-style SVGs for consistency) ---

const GlobeAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.777-7A8.964 8.964 0 0 1 12 21a8.964 8.964 0 0 1-8.777-7A9.005 9.005 0 0 0 12 21ZM3.75 7.5h16.5a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 14.25a8.956 8.956 0 0 1-19.5 0M3.75 7.5c0 .09.004.179.011.267m16.478 0c.007-.088.011-.177.011-.267m-16.5 0a2.25 2.25 0 0 0-2.25 2.25v3.75a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-3.75a2.25 2.25 0 0 0-2.25-2.25m-16.5 0h16.5" />
  </svg>
);

const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-3 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 15.75l-4.5 4.5-4.5-4.5m6-6l-4.5-4.5L3 9.75M21 9.75l-4.5-4.5-4.5 4.5M16.5 15.75V9.75M7.5 15.75V9.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.3 8.608A6.004 6.004 0 0 1 12 7.5c1.064 0 2.063.277 2.976.758M9.3 8.608A6.004 6.004 0 0 0 7.5 12c0 1.064.277 2.063.758 2.976m1.034-4.368a6.004 6.004 0 0 1 2.976-.758m2.976.758c.48.913.758 1.912.758 2.976a6.004 6.004 0 0 1-.758 2.976m-4.368-1.034a6.004 6.004 0 0 0-.758 2.976c-1.064 0-2.063-.277-2.976-.758m-1.034 4.368a6.004 6.004 0 0 0-.758-2.976m-2.976-.758a6.004 6.004 0 0 0-2.976.758" /> {/* Abstract representation of connection/collaboration */}
    </svg>
  );

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);


const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3A2.25 2.25 0 0 0 8.25 4.5v2.25c0 .621.504 1.125 1.125 1.125h5.25c.621 0 1.125-.504 1.125-1.125V4.5A2.25 2.25 0 0 0 15.666 3.888ZM12.75 18.75h-1.5a2.25 2.25 0 0 1-2.25-2.25v-6.75a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25Z" />
  </svg>
);
// --- End Icon Components ---


function InfoSection() {
  const email = "info@reduxcorporation.com";
  const [buttonText, setButtonText] = useState("Copy my email address");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Email address copied!");
      setTimeout(() => {
        setButtonText("Copy my email address");
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
      setButtonText("Copy Failed");
       setTimeout(() => {
        setButtonText("Copy my email address");
      }, 3000);
    });
  };

  const services = ["Designing", "Applications", "Websites", "Softwares", "Dashboards", "Branding"];

  // Shared card classes for easier maintenance
  const cardBaseClasses = "rounded-2xl p-6 shadow-lg border border-gray-700/30 transition-all duration-300 ease-in-out group"; // Added group class for icon hovers
  const cardHoverClasses = "hover:shadow-xl hover:border-gray-600/50 hover:-translate-y-1"; // Lift effect

  return (
    // Original section classes kept as per request
    <section className="py-20 px-4 text-white">
      {/* Grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:auto-rows-min gap-6">
        

        {/* New Div - Tagline on the left */}
        <div className="md:col-start-2 md:row-start-1 flex items-center justify-center bg-transparent mr-96">
          <p className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            " Built for Today. Ready for Tomorrow."
          </p>
        </div>

        {/* 1. Time Zone Communication */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-3 md:row-start-1 bg-gray-900 flex flex-col justify-between`}>
          <p className="text-lg font-semibold mb-4">
            We are flexible with time zone communications.
          </p>
          <div className="text-center mt-auto pt-4"> {/* Centering container */}
             <GlobeAltIcon />
          </div>
        </div>

        {/* 2. Client Collaboration */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-1 md:row-start-2 bg-gray-900 flex items-center`}>
           <HandshakeIcon />
          <p className="text-lg font-semibold">
            We prioritize client collaboration, fostering open communication.
          </p>
        </div>

        {/* 3. Services */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-2 md:col-span-2 md:row-start-2 bg-gradient-to-br from-indigo-700 to-purple-800 text-white`}>
          {/* Enhanced gradient */}
          <p className="text-sm text-indigo-200 mb-1">We work in</p> 
          <h3 className="text-xl font-bold mb-5">Providing the Best</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm"> 
            {services.map((item, i) => (
              // Added slight scale and brightness on hover for service items
              <div key={i} className="bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-200 rounded-md px-3 py-2 text-center text-indigo-100 hover:scale-105 hover:brightness-110">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Team Profile */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-1 md:row-start-3 bg-gray-900`}>
          <div className="flex items-center mb-4">
             <UsersIcon />
             <p className="text-lg font-semibold">
                Team of tech enthusiasts with a passion for building.
             </p>
          </div>
          {/* Profile section with slightly adjusted styling */}
          <div className="flex items-center gap-4 bg-gray-800/70 p-3 rounded-lg border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-purple-500 group-hover:border-purple-400 transition-colors duration-300" 
            />
            <div>
              <p className="font-medium text-purple-100">John Doe</p>
              <p className="text-sm text-gray-400">Co-Founder</p>
            </div>
          </div>
        </div>

        {/* 5. Work With Us */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-1 md:row-start-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 flex flex-col justify-center`}>
          {/* Adjusted gradient */}
          <p className="text-lg font-bold mb-4">Do you want to work with us?</p>
          {/* Button with hover glow effect */}
          <button
            onClick={copyEmailToClipboard}
            className="bg-gray-900 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full px-5 py-2.5 text-sm transition duration-300 ease-in-out flex items-center justify-center gap-2 max-w-max group-hover:shadow-lg group-hover:shadow-pink-500/40" 
          >
            <ClipboardIcon /> 
            {buttonText}
          </button>
        </div>

        {/* 6. Inside Scoop */}
        <div className={`${cardBaseClasses} ${cardHoverClasses} md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-2 bg-gray-900 flex flex-col justify-center`}>
          <div className="flex items-center mb-2">
              <CodeBracketIcon />
              <h3 className="text-sm font-medium text-gray-400">The Inside Scoop</h3>
          </div>
          <p className="text-lg font-semibold ml-9"> {/* Indent content slightly */}
            Currently developing Accommodation Management Software.
          </p>
          {/* Optional subtle graphic element */}
           <div className="mt-4 ml-9 text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
             {/* Placeholder for a subtle graphic or more details */}
             <span className="block h-1 w-1/3 bg-teal-500/20 rounded-full"></span>
           </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;