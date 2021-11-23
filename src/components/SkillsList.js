import React from "react";

const skills = [
  { id: 1, name: "Python & Django", level: "Expert", progress: 95 },
  { id: 2, name: "Javascript & jQuery", level: "Expert", progress: 95 },
  { id: 3, name: "HTML5, CSS3, SASS & LESS", level: "Expert", progress: 95 },
  { id: 4, name: "Ruby on Rails", level: "Pro", progress: 85 },
];

export default function SkillsList() {
  return skills.map((skill) => (
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
  ));
}
