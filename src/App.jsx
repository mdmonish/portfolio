import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tech from "./components/Tech";

import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-[#F2F2F2]">
        <Navbar />
        <div className="bg-pattern">
          <Hero />
          <Tech />
        </div>

        <Experience />

        <Contact />
      </div>
    </Router>
  );
};

export default App;
