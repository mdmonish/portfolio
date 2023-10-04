import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative border-8 p-2 rounded-xl bg-white font-mono">
      <img
        src={project.image}
        height={400}
        className="object-cover w-full"
        alt="crypto"
      />
      <h1 className="my-2 sm:my-4 text-2xl sm:text-3xl font-bold">
        {project.name}
      </h1>
      <div>
        <a href={project.live_demo_link} target="_blank" rel="noreferrer">
          <button className=" mr-2 bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
            Live Demo
          </button>
        </a>
        <a href={project.source_code_link} target="_blank" rel="noreferrer">
          <button className="bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
            Source Code
          </button>
        </a>
      </div>
      <p className="mt-4 mb-8 leading-5">{project.description}</p>
      <div className="flex gap-x-2 text-[#65C2FD] absolute bottom-2">
        {!!project.tags && project.tags.map(tag => <p>#{tag.name}</p>)}
      </div>
    </div>
  );
};

export default ProjectCard;
