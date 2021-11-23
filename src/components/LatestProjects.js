import React from "react";
import { projectApi } from "../services/project";
import LatestProjectsList from "./LatestProjectsList";

export default function LatestProjects({ highlightedId }) {
  const { data: projects, error, isLoading } = projectApi.useGetProjectsQuery();

  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <div className="animate-pulse flex flex-col">
      <div className="flex flex-row gap-4">
        <div className="h-32 w-44 bg-blue-500"></div>
        <div className="flex flex-col w-full">
          <div className="h-4 bg-blue-400 rounded w-full mb-4"></div>
          <div className="space-y-2">
            <div className="h-2 bg-blue-400 rounded"></div>
            <div className="h-2 bg-blue-400 rounded"></div>
            <div className="h-2 bg-blue-400 rounded"></div>
            <div className="h-2 bg-blue-400 w-44 rounded"></div>
          </div>
          <div className="h-4 bg-blue-400 rounded w-20 mt-4"></div>
        </div>
      </div>
    </div>
  ) : projects ? (
    <LatestProjectsList projects={projects} highlightedId={highlightedId} />
  ) : null;
}
