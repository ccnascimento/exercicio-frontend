import React from "react";
import Profile from "../../public/img/profile.png";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="w-full bg-white py-8 border-t-4 border-green-700">
      <nav className="container px-4 mx-auto grid grid-cols-1 md:flex md:flex-row md:flex-wrap justify-center items-center">
        <div className="grid grid-cols-1 md:flex md:flex-row justify-center items-center">
          <img
            src={Profile}
            alt="Christian Nascimento"
            className="mx-auto"
            width={180}
            height={180}
          />
          <div className="flex flex-col text-center md:text-left md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold">James Lee</h1>
            <h2 className="text-2xl">Web App Developer</h2>
            <ul className="flex flex-row gap-3 mt-4 mx-auto md:mx-none">
              <li className="w-8 h-8 bg-gray-400 text-white flex rounded-full justify-center items-center">
                <i className="fab fa-twitter" />
              </li>
              <li className="w-8 h-8 bg-gray-400 text-white flex rounded-full justify-center items-center">
                <i className="fab fa-google-plus-g" />
              </li>
              <li className="w-8 h-8 bg-gray-400 text-white flex rounded-full justify-center items-center">
                <i className="fab fa-linkedin" />
              </li>
              <li className="w-8 h-8 bg-gray-400 text-white flex rounded-full justify-center items-center">
                <i className="fab fa-github-alt" />
              </li>
              <li className="w-8 h-8 bg-gray-400 text-white flex rounded-full justify-center items-center">
                <i className="fab fa-hacker-news" />
              </li>
            </ul>
          </div>
        </div>
        <Button
          text="Contact me"
          url="/contact"
          icon={<i className="fa fa-paper-plane" />}
          className="mx-auto w-44 md:ml-auto md:mx-0 mt-8 md:mt-0 bg-green-500 font-bold uppercase table text-white px-4 py-2 rounded-md text-center"
        />
      </nav>
    </div>
  );
}
