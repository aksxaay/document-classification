import React from "react";
import dissonanceLogo from "../assets/dissonance.svg";
// import Link from "next/link";
import { Link } from "react-router-dom";

import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = ["Features", "About"];

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link to="/">
                  <div className="flex items-center space-x-4 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src={dissonanceLogo}
                        alt="N"
                        width="32"
                        height="32"
                        className="relative bottom-[0.25px] w-6 invert dark:invert-0"
                      />
                    </span>
                    <span className="font-medium">
                      <span className="font-black">º</span>dissonance™
                    </span>
                  </div>
                </Link>
                <div className="mr-2 ml-auto lg:hidden">
                  <ThemeChanger />
                </div>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700 lg:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="my-5 flex w-full flex-col flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} to="/">
                        <div className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-900">
                          {item}
                        </div>
                      </Link>
                    ))}
                    <Link to="/login">
                      <div className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5">
                        Login
                      </div>
                    </Link>
                    <Link to="/signup">
                      <div className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5">
                        SignUp
                      </div>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link to="/">
                  <div className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800">
                    {menu}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__item hidden space-x-4 lg:flex">
          <Link to="/login">
            <div className="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-2 lg:block">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-2 lg:block">
              SignUp
            </div>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
