import React from "react";
import SkillsList from "./SkillsList";

export default function Aside() {
  return (
    <aside>
      <div className="box space-y-4 flex flex-col">
        <address>
          <i className="fa fa-map-marker-alt mr-4" /> San Francisco, US
        </address>
        <a href="mailto:jameslee@website.com">
          <i className="far fa-envelope mr-4" />{" "}
          <span className="text-green-500">jameslee@website.com</span>
        </a>
        <a href="http://www.website.com">
          <i className="fa fa-link mr-4" />{" "}
          <span className="text-green-500">http://www.website.com</span>
        </a>
      </div>
      <div className="box">
        <h2>Skills</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          numquam esse aspernatur, dolores voluptatem doloribus, necessitatibus,
          laborum sequi fugit itaque incidunt nihil ipsum culpa soluta eaque.
          Eum facere officia id!
        </p>
        <SkillsList />
        <a
          href="https://coderwall.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-green-500 text-sm"
        >
          <i className="fa fa-external-link-alt mr-2" />
          More on Coderwall
        </a>
      </div>
    </aside>
  );
}
