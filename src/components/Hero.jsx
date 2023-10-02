import React from "react";

const Hero = () => {
  return (
    <div
      id="about"
      className="sm:relative px-10 sm:h-[92vh] sm:px-28 sm:py-36 py-20"
    >
      <div>
        <p className="text-[24px] sm:text-[56px] leading-none font-mono">
          Hi,I am
          <br />
          <span className="font-bold">Mohammad Monish</span>
        </p>
        <div className="text-[20px] sm:text-[36px] w-fit flex">
          <h1 className="bg-white -skew-x-12 px-2 font-bold">
            Frontend Developer
          </h1>
          &nbsp;<span>from India</span>
        </div>
        <a
          href="/Monish-Reactjs-Developer-Resume.pdf"
          download="Mohammad-Monish-Resume"
        >
          <button className="my-4 sm:my-8 bg-tertiary py-1 sm:py-3 px-3 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            Download Resume
          </button>
        </a>
        <p className="font-mono text-sm font-semibold sm:text-lg sm:max-w-[40%] leading-5">
          I am a versatile frontend developer with a speciality in React JS and
          Tailwind CSS. I also have a solid grip of the fundamentals of web
          development using HTML, CSS, and JavaScript.
        </p>
      </div>
      <img
        src="/front.png"
        className="sm:absolute sm:right-28 sm:top-36 shadow-3xl mt-4 sm:mt-0"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
