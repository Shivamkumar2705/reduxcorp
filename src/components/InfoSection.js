import React, { useState } from 'react'; // Import useState

function InfoSection() {
  const email = "info@reduxcorporation.com";
  const [buttonText, setButtonText] = useState("Copy my email address"); // State for button text

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setButtonText("Email address copied"); // Change button text
    // Optionally, reset the button text after a delay:
    setTimeout(() => {
      setButtonText("Copy my email address");
    }, 3000); // Reset after 3 seconds
  };

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     

        {/* Top Right Box */}
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-lg font-semibold mb-2">
            We are flexible with time zone communications.
          </p>
          <img
            src="/images/globe.png" // Replace with your image path
            alt="Globe"
            className="w-20 h-20 opacity-70"
          />
        </div>

        {/* Middle Left Box */}
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-lg font-semibold">
            We prioritize client collaboration, fostering open communication.
          </p>
        </div>

        {/* Middle Right Box */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Providing the Best</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-700 rounded-md p-2 text-sm">Designing</div>
            <div className="bg-gray-700 rounded-md p-2 text-sm">Designing</div>
            <div className="bg-gray-700 rounded-md p-2 text-sm">Applications</div>
            <div className="bg-gray-700 rounded-md p-2 text-sm">Softwares</div>
            <div className="bg-gray-700 rounded-md p-2 text-sm">Websites</div>
            <div className="bg-gray-700 rounded-md p-2 text-sm">Dashboards</div>
          </div>
        </div>

        {/* Bottom Left Box */}
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-lg font-semibold mb-2">
            Team of tech enthusiast with a passion for building.
          </p>
          <div className="bg-gray-700 rounded-md p-2 text-sm">
            <img
              src="/images/profile.png" // Replace with your image path
              alt="Profile"
              className="w-10 h-10 rounded-full inline-block mr-2"
            />
            {/* Add name or other info here */}
          </div>
        </div>

        {/* Bottom Middle Box */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-4">
          <p className="text-lg font-semibold mb-4">Do you want to work with us?</p>
          <button
            className="bg-black bg-opacity-50 hover:bg-opacity-80 rounded-md px-4 py-2 text-sm"
            onClick={copyEmailToClipboard}
          >
            {buttonText} {/* Use the buttonText state */}
          </button>
        </div>

        {/* Bottom Right Box */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">The Inside Scoop</h3>
          <p className="text-sm mb-2">
            Currently developing Accommodation Management Software
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;