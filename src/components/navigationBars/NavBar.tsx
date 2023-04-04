import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className=" bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <NavLink
            to="/"
            className="hover:bg-gray-900 px-3 py-2 mx-5 rounded-lg"
          >
            <h1 className="text-white">Home</h1>
          </NavLink>
          <NavLink
            to="/personalInfo"
            className="hover:bg-gray-900 px-3 py-2 mx-5 rounded-lg"
          >
            <h1 className="text-white">Personal Info</h1>
          </NavLink>
          <NavLink
            to="/skills"
            className="hover:bg-gray-900 px-3 py-2 mx-5 rounded-lg"
          >
            <h1 className="text-white">Skills</h1>
          </NavLink>
          <NavLink
            to="/experiences"
            className="hover:bg-gray-900 px-3 py-2 mx-5 rounded-lg"
          >
            <h1 className="text-white">Experience</h1>
          </NavLink>

          <NavLink
            to="/education"
            className="hover:bg-gray-900 px-3 py-2 mx-5 rounded-lg"
          >
            <h1 className="text-white">Education</h1>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
