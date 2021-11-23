import React from "react";

export default function LatestProjectsList({ projects, highlightedId }) {
  const lastProjects = projects.filter(
    (project) => project.id !== highlightedId
  );

  return lastProjects.map((project) => (
    <div className="flex flex-col project-list mb-8" key={project.id}>
      <div className="grid grid-cols-1 md:flex md:flex-row gap-4">
        <div className="w-full md:w-64">
          <img
            src={require(`../../public/img/${project.picture}`)}
            alt={project.title}
            className="w-full md:w-64"
          />
        </div>

        <div className="flex flex-col w-full">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
            className="text-green-500 text-sm"
          >
            <i className="fa fa-external-link-alt mr-2" />
            Find out more
          </a>
        </div>
      </div>
    </div>
  ));
}
