import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
