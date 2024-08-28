// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 duration-300 bg-gray-50 z-10 shadow-md">
        <nav className="md:px-32 p-5 bg-gray-50">
          <div className="flex justify-between items-center text-[#274C5B]">
            <div className="logo text-3xl font-extrabold">
              {" "}
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-4xl font-bold whitespace-nowrap">
                  Institut Teknologi Quantum
                </span>
              </Link>
            </div>
            <div className="hidden md:inline-block text-lg space-x-8">
              <Link
                to="/"
                className="border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 hover:text-green-600"
              >
                Home
              </Link>
              <HashLink
                smooth
                to="/#about"
                className="border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 hover:text-green-600"
              >
                About
              </HashLink>
              <Link
                to="/major"
                className="border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 hover:text-green-600"
              >
                Major
              </Link>
              <Link
                to="/contact"
                className="border-b-2 border-transparent hover:border-b-2 hover:border-gray-300 hover:text-green-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
