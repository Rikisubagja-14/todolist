import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 mr-11 ml-11 h-52 rounded-b-lg  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-center mt-16 mx-auto">
          <span className="self-center text-5xl font-semibold italic font-serif whitespace-nowrap  dark:text-white">
           TODO LIST 
          </span>
      </div>
    </nav>
  );
};

export default Navbar;
