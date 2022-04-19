import Link from 'next/link';
import React, { useState } from 'react';

import HamburgerIcon from '@public/images/hamburger-menu.svg';
type Props = {};

export default function Header({}: Props) {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggle = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <header id="header" className="sticky w-full z-30 top-0 bg-white shadow-md">
      <div className="h-full w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-3">
        <Link href="/">
          <div className="flex items-center justify-center cursor-pointer">
            <a className="text-5xl font-['Impact']">PopBox</a>
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={toggle}
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <HamburgerIcon />
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${
            showNavbar ? '' : 'hidden'
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-center flex-1 items-center">
            {/* <li className="">
                <Link href="/">
                  <a className="inline-block py-2 px-4 text-black">
                    How it Works
                  </a>
                </Link>
              </li> */}
          </ul>

          {true && (
            <div className="inline-flex flex-col lg:flex-row text-left justify-start">
              <Link href="/login">
                <a className="inline-block py-2 px-4 text-black lg:mr-5 text-left">
                  Login In
                </a>
              </Link>

              <Link href="/signup">
                <a className="inline-block border border-blue-500 rounded-full px-5 py-2 text-left">
                  Sign up
                </a>
              </Link>
            </div>
          )}

          {false && (
            <li className="flex items-center">
              <div className="dropdown flex items-center justify-between cursor-pointer">
                <Link href={`/account`}>
                  <a className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-100px font-bold text-sm ml-2">
                    Your Name
                  </a>
                </Link>

                <div className="dropdown-menu">
                  <div className="arrow-icon"></div>
                  <ul>
                    <li className="flex items-center ">
                      <button
                        className="hover:text-gray-300 text-sm font-semibold px-4 py-3"
                        onClick={() => console.log('action logout')}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          )}
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </header>
  );
}
