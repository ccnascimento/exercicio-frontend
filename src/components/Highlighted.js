import React from "react";
import { projectApi } from "../services/project";
import Button from "./Button";

export default function Highlighted({ highlightedId }) {
  const {
    data: highlighted,
    error: highlightedError,
    isLoading: highlightedIsLoading,
  } = projectApi.useGetHighlightedQuery(highlightedId);

  return highlightedError ? (
    <>Oh no, there was an error</>
  ) : highlightedIsLoading ? (
    <div className="animate-pulse flex flex-col">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-blue-400 rounded w-2/4 mx-auto"></div>
        <div className="h-4 bg-blue-400 rounded w-3/4 mx-auto"></div>
        <div className="h-64 bg-blue-400 rounded w-full mx-auto"></div>
        <div className="space-y-2">
          <div className="h-4 bg-blue-400 rounded"></div>
          <div className="h-4 bg-blue-400 rounded w-5/6"></div>
        </div>
      </div>
      <div className="h-12 bg-blue-400 rounded w-32 mx-auto mt-4 self-center p-0"></div>
    </div>
  ) : highlighted ? (
    <article>
      <header>
        <h1 className="text-xl">{highlighted.title}</h1>
        <h2 className="text-base">{highlighted.subtitle}</h2>
      </header>
      <figure>
        <img
          src={require(`../../public/img/${highlighted.picture}`)}
          alt={highlighted.title}
        />
      </figure>
      <p className="mt-8">{highlighted.description}</p>
      <Button
        icon={<i className="fa fa-thumbs-up" />}
        text="Back my project"
        url={highlighted.url}
        className="mx-auto mt-8 bg-blue-500 font-bold uppercase w-48 text-white text-sm flex justify-center items-center px-4 py-2 rounded-md text-center"
      />
    </article>
  ) : null;
}
