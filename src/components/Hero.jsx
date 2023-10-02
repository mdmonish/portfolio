import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <div id="about" className="sm:relative sm:h-[85vh] px-16 sm:py-24 py-20">
      <div className="">
        <p className="text-[24px] sm:text-[56px] leading-none ">
          Hi,
          <br />
          I am Mohammad Monish
          <br /> Frontend Developer
          <br />
          Think, Process and Build
        </p>
        <a
          href="/Monish-Reactjs-Developer-Resume.pdf"
          download="Mohammad-Monish-Resume"
        >
          <button className="my-4 bg-tertiary py-1 sm:py-3 px-3 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            Download Resume
          </button>
        </a>
      </div>
      <img
        src="/front.png"
        className="sm:absolute sm:right-20 sm:top-24 shadow-3xl"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
