import React, { useState } from "react";

import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function openMenuHandler() {
    setIsMenuActive(!isMenuActive);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  return (
    <header className="w-screen flex justify-between items-center border-b-2 px-6 md:px-10 py-3 md:py-4">
      <div className="flex justify-center items-center text-2xl md:text-3xl">
        <h1 className="flex justify-center items-center text-white text-center rounded-md px-3 py-2 bg-black font-black">
          D-Community
        </h1>
      </div>
      {/* nav for desktop */}
      <nav className="hidden md:flex justify-center items-center gap-10">
        <ul className="hidden md:flex justify-center items-center gap-8 text-base font-semibold">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About US</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
        {isLoggedIn === true ? (
          <div className="w-12 h-12 border-2 rounded-full cursor-pointer">
            <MdOutlineAccountCircle className="w-full h-full" />
          </div>
        ) : (
          <button className="border-2 font-semibold bg-gray-200 border-blue-300 px-4 py-2">
            Login/Signup
          </button>
        )}
      </nav>

      {/* nav for mobile */}
      <nav className="relative flex md:hidden" onClick={openMenuHandler}>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>
        {isMenuActive && (
          <ul className="absolute top-6 right-0 w-fit bg-blue-100 flex flex-col justify-center items-center  font-semibold text-base">
            <li className="cursor-pointer hover:bg-red-100 w-full px-2 py-3">
              {isLoggedIn === true ? (
                <div className="w-full flex justify-start items-center">
                  <MdOutlineAccountCircle className="border-2 rounded-full text-5xl" />
                  <h3>Name Here</h3>
                </div>
              ) : (
                <button className="border-2 font-semibold bg-gray-200 border-blue-300 px-4 py-2">
                  Login/Singup
                </button>
              )}
            </li>
            <li className="cursor-pointer hover:bg-red-100 w-full px-4 py-3">
              Services
            </li>
            <li className="cursor-pointer hover:bg-red-100 w-full  px-4 py-3">
              About Us
            </li>
            <li className="cursor-pointer hover:bg-red-100 w-full  px-4 py-3">
              Contacts Us
            </li>
            {isLoggedIn && (
              <li
                className="cursor-pointer hover:bg-red-100 w-full  px-4 py-3"
                onClick={logoutHandler}
              >
                Logout
              </li>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
