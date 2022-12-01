import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

import Logo from "../../assets/Logo.png";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function openMenuHandler() {
    setIsMenuActive(!isMenuActive);
  }

  function loginHandler() {
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  return (
    <header className="w-screen flex justify-between items-center border-b-[0.5px] px-6 md:px-10 shadow-md">
      <div>
        <img src={Logo} alt="Logo" className="w-10" />
      </div>

      {/* nav for desktop */}
      <nav className="hidden md:flex justify-center items-center gap-10">
        <ul className="hidden md:flex justify-center items-center gap-8 text-base">
          <li className="cursor-pointer px-2 py-1">Services</li>
          <li className="cursor-pointer">About US</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
        {isLoggedIn === true ? (
          <div
            className="relative w-12 h-12 border-2 rounded-full cursor-pointer"
            onClick={openMenuHandler}
          >
            <MdOutlineAccountCircle className="w-full h-full" />
            {isLoggedIn && isMenuActive && (
              <ul className="absolute top-10 right-1/2  bg-white rounded-md border-2 flex flex-col justify-center items-center  font-semibold text-base">
                <li className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3">
                  Settings
                </li>
                <li
                  className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3"
                  onClick={logoutHandler}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <button
            className="border-2 font-semibold bg-gray-200 border-blue-300 px-4 py-2"
            onClick={loginHandler}
          >
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
          <ul className="absolute top-6 right-0 bg-white rounded-md border-2 flex flex-col justify-center items-center  font-semibold text-base">
            <li className="cursor-pointer hover:bg-blue-200 w-44 px-2 py-3 flex justify-center items-center">
              {isLoggedIn === true ? (
                <div className="w-full flex justify-start items-center">
                  <MdOutlineAccountCircle className="border-2 rounded-full text-5xl" />
                  <h3>Name Here</h3>
                </div>
              ) : (
                <button
                  className="border-2 font-semibold bg-gray-200 border-blue-300 px-4 py-2"
                  onClick={loginHandler}
                >
                  Login/Singup
                </button>
              )}
            </li>
            <li className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3">
              Services
            </li>
            <li className="cursor-pointer hover:bg-blue-200 w-full  px-4 py-3">
              About Us
            </li>
            <li className="cursor-pointer hover:bg-blue-200 w-full  px-4 py-3">
              Contacts Us
            </li>
            {isLoggedIn && (
              <li
                className="cursor-pointer hover:bg-blue-200 w-full  px-4 py-3"
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
