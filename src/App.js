// src/App.js
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
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


