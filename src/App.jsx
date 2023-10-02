import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tech from "./components/Tech";

import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-gradient-to-r from-[#4e2470] from-30% to-pink-500">
        <Navbar />
        <Hero />
        <Tech />

        <Experience />

        <Contact />
      </div>
    </Router>
  );
};

export default App;
