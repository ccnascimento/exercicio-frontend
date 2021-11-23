import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../App";
import LatestProjectsList from "./LatestProjectsList";

function LatestProjects({ highlightedId }) {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.fetchProjects();
  }, []);

  return store.error ? (
    <>Oh no, there was an error</>
  ) : store.isLoading ? (
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
  ) : store.projects.length > 0 ? (
    <LatestProjectsList
      projects={store.projects}
      highlightedId={highlightedId}
    />
  ) : null;
}

export default observer(LatestProjects);
