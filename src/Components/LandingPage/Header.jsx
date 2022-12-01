import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { loginDropdownOptions } from "../../data/LoginDropdownOptions";

import Logo from "../../assets/Logo.png";
import LoginDropdownArrow from "../UI/LoginDropdownArrow";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  function openMenuHandler() {
    setIsMenuActive(!isMenuActive);
  }

  function showLoginMenuHandler() {
    setShowLoginMenu(!showLoginMenu);
  }

  function loginHandler() {
    setIsUserLoggedIn(true);
  }

  function logoutHandler() {
    setIsUserLoggedIn(false);
  }

  return (
    <header className="w-screen flex justify-between items-center border-b-[0.5px] py-2 px-6 md:px-10 shadow-md">
      <div>
        <img src={Logo} alt="Logo" className="w-10" />
      </div>

      {/* nav for desktop */}
      <nav className="hidden md:flex justify-center items-center gap-20">
        <ul className="hidden md:flex justify-center items-center gap-8 text-base">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Services</li>
        </ul>
        {isUserLoggedIn === true ? (
          <div
            className="relative w-12 h-12 border-2 rounded-full cursor-pointer"
            onClick={openMenuHandler}
          >
            <MdOutlineAccountCircle className="w-full h-full" />
            {isUserLoggedIn && isMenuActive && (
              <ul className="absolute top-10 right-1/2  bg-white rounded-md border-2 flex flex-col justify-center items-center  font-semibold text-base">
                <li className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3">
                  Settings
                </li>
                <li
                  className="cursor-pointer hover:bg-customGray w-full px-4 py-3"
                  onClick={logoutHandler}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <div className="relative inline-block text-left pr-4">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-customBlue"
                  onClick={showLoginMenuHandler}
                >
                  Log-in
                  <LoginDropdownArrow />
                </button>
              </div>

              {showLoginMenu && (
                <div className="absolute right-8 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="shadow-xl">
                    {loginDropdownOptions.map((option) => (
                      <Link
                        key={option.id}
                        to={option.path}
                        className="block px-4 py-2 text-sm hover:bg-customGray text-center"
                        onClick={() => {
                          setShowLoginMenu(false);
                        }}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              className="font-semibold bg-customBlue text-white px-5 py-2 rounded-md"
              onClick={loginHandler}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* nav for mobile */}
      <nav className="relative flex md:hidden">
        <div
          className="flex flex-col justify-center items-end gap-1 cursor-pointer"
          onClick={openMenuHandler}
        >
          <div className="w-8 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-4 h-1 bg-black"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>

        {isMenuActive && (
          <ul className="absolute top-6 right-0 bg-white rounded-md border-2 flex flex-col justify-center items-center  text-base text-center">
            <li className="cursor-pointer w-44 px-2 py-3 flex justify-center items-center">
              {isUserLoggedIn === true ? (
                <div className="w-full flex justify-start items-center">
                  <MdOutlineAccountCircle className="border-2 rounded-full text-5xl" />
                  <h3>Name Here</h3>
                </div>
              ) : (
                <button
                  className="font-semibold w-full bg-customBlue text-white px-5 py-2 rounded-md"
                  onClick={loginHandler}
                >
                  Get Started
                </button>
              )}
            </li>

            {!isUserLoggedIn && (
              <li
                className="relative cursor-pointer hover:bg-blue-200 w-full  px-4 py-3"
                onClick={showLoginMenuHandler}
              >
                Log-in
                <span className="absolute mt-[2px] left-0">
                  <LoginDropdownArrow />
                </span>
                {showLoginMenu && (
                  <div className="absolute right-36 top-8 z-10 w-44 rounded-md bg-white shadow-lg ring-1 ring-customGray ring-opacity-5 focus:outline-none">
                    <div className="shadow-xl py-2">
                      {loginDropdownOptions.map((option) => (
                        <Link
                          key={option.id}
                          to={option.path}
                          className="block px-4 py-3 text-sm hover:bg-customGray text-center"
                          onClick={() => {
                            setShowLoginMenu(false);
                          }}
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            )}

            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3"
              onClick={() => {
                setIsMenuActive(false);
              }}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3"
              onClick={() => {
                setIsMenuActive(false);
              }}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3"
              onClick={() => {
                setIsMenuActive(false);
              }}
            >
              Contacts Us
            </li>
            {isUserLoggedIn && (
              <li
                className="cursor-pointer hover:bg-blue-200 w-full px-4 py-3"
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
