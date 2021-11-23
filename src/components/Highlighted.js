import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useContext } from "react";
import { StoreContext } from "../App";
import Button from "./Button";

function Highlighted({ highlightedId }) {
  const store = useContext(StoreContext);
  const hasHighlighted = Object.keys(store.highlighted).length > 0;

  useEffect(() => {
    store.fetchHighLighted(highlightedId);
  }, []);

  return store.error ? (
    <>Oh no, there was an error</>
  ) : store.isLoading ? (
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
  ) : hasHighlighted ? (
    <article>
      <header>
        <h1 className="text-xl">{store.highlighted.title}</h1>
        <h2 className="text-base">{store.highlighted.subtitle}</h2>
      </header>
      <figure>
        <img
          src={require(`../../public/img/${store.highlighted.picture}`)}
          alt={store.highlighted.title}
          width={611}
          height={254}
          className="w-full"
        />
      </figure>
      <p className="mt-8">{store.highlighted.description}</p>
      <Button
        icon={<i className="fa fa-thumbs-up" />}
        text="Back my project"
        url={store.highlighted.url}
        className="mx-auto mt-8 bg-blue-500 font-bold uppercase w-48 text-white text-sm flex justify-center items-center px-4 py-2 rounded-md text-center"
      />
    </article>
  ) : null;
}

export default observer(Highlighted);
