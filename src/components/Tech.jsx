import React from "react";
import html from "../assets/html.png";
import css from "../assets/CSS.png";
import js from "../assets/js.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import jira from "../assets/jira.png";
import material from "../assets/material.png";
import node from "../assets/node.png";
import next from "../assets/next.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[10px] px-16 pb-8">
      <img
        src={html}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={css}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={js}
        className="rounded-full border bg-white w-[40px] h-[40px]"
        alt="tech"
      />
      <img
        src={react}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />

      <img
        src={redux}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={tailwind}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={node}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={material}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={next}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={typescript}
        className="rounded-full border bg-white w-[40px] h-[40px]"
        alt="tech"
      />
      <img
        src={express}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={git}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
      <img
        src={jira}
        className="rounded-full border bg-white object-contain w-[40px] h-[40px] p-1"
        alt="tech"
      />
    </div>
  );
};

export default Tech;
