// src/pages/Home.js
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import Midicomponent from "../components/Midicomponent"; // Import the new component

function Home() {
  return (
    <div className="relative overflow-hidden text-center py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-purple-100 dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-[#0f0f0f] transition-all duration-500 pb-24">
      <Header />
      <h5>Praise from Happy Customers</h5>
      <Midicomponent /> {/* Render the Midicomponent */}
      <Speciality />
     
    </div>
  );
}

export default Home;