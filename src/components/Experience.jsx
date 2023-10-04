import React from "react";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const Experience = () => {
  return (
    <div className="px-10 sm:py-16 sm:px-16 py-20 font-mono" id="work">
      <h1 className="text-[24px] sm:text-[48px] font-bold">
        Personal Projects
      </h1>
      <p className="max-w-[100%] font-semibold text-sm sm:text-lg leading-5">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it.
      </p>
      <div className="flex flex-col sm:flex-row gap-y-[20px] sm:gap-x-[20px] mt-8">
        {projects?.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
