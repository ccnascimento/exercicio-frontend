import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../App";

function SkillsList() {
  const store = useContext(StoreContext);

  return store.skills.length > 0
    ? store.skills.map((skill) => (
        <div className="flex flex-col mb-4" key={skill.id}>
          <div className="flex flex-row">
            <h3 className="font-bold">{skill.name}</h3>
            <small className="ml-auto text-gray-300">{skill.level}</small>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-4 mb-4 text-xs flex bg-gray-200">
              <div
                style={{ width: `${skill.progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>
      ))
    : null;
}

export default observer(SkillsList);
