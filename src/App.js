// src/App.js
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <div className="border-b border-gray-200">
        <Navbar />
      </div>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;



