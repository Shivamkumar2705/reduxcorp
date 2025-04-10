// src/pages/Home.js
import Header from "../components/Header";

import Speciality from "../components/Speciality"; // Import the new component

function Home() {
  return (
    <div>
      <Header />
    
      <Speciality /> {/* Render the Speciality component */}
    </div>
  );
}

export default Home;