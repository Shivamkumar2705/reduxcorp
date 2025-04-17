import Header from "../components/Header";
import Speciality from "../components/Speciality";
import Midicomponent from "../components/Midicomponent";
import Approach from "../components/Approach";
import Border from "../components/Border";
// import Sticker from "../components/Sticker";
import InfoSection from "../components/InfoSection" 

function Home() {
  return (
    <div className="relative overflow-hidden text-center py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-purple-100 dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-[#0f0f0f] transition-all duration-500 pb-24">
      <Header />
      <InfoSection />
     
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mb-12 mt-32">
        Praise from Happy Customers
      </h2>
      <Midicomponent />
      {/* <Sticker />  */}
      <Speciality />
      <h2 className=" mt-20 md:mt-32 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400 mb-8">Our Approach</h2>
      <Approach />
      <Border />
    </div>
  );
}

export default Home;