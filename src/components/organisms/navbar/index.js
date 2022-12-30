import React from "react";
import ClockTimer from "../../atoms/ClockTimer";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 mr-11 ml-11 h-60 rounded-b-lg  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-center items-center mt-16 mx-auto">
        <span className="self-center text-6xl font-semibold italic font-serif whitespace-nowrap underline dark:text-white">
          TODO LIST
        </span>
      </div>
      <div className="container flex flex-wrap justify-center items-center mx-auto pt-5">
        <ClockTimer />
      </div>
    </nav>
  );
};

export default Navbar;
