import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center gap-4 flex-col p-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Our Intern Project Portfolio
        </h1>
      </div>
    </div>
  );
}

export default App;
